import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Pencil, Trash2, X, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export interface FieldDef {
  key: string;
  label: string;
  type?: "text" | "textarea" | "select" | "number" | "date" | "boolean";
  options?: string[];
  required?: boolean;
  showInTable?: boolean;
}

interface AdminCrudModuleProps {
  title: string;
  description: string;
  table: string;
  fields: FieldDef[];
  addLabel?: string;
}

export default function AdminCrudModule({ title, description, table, fields, addLabel = "Adicionar" }: AdminCrudModuleProps) {
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Record<string, any> | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const tableColumns = fields.filter(f => f.showInTable !== false);

  const { data: rows = [], isLoading } = useQuery({
    queryKey: [table],
    queryFn: async () => {
      const { data, error } = await (supabase as any).from(table).select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data || [];
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (item: Record<string, any>) => {
      if (item.id) {
        const { id, created_at, updated_at, ...rest } = item;
        const { error } = await (supabase as any).from(table).update(rest).eq("id", id);
        if (error) throw error;
      } else {
        const { error } = await (supabase as any).from(table).insert(item);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [table] });
      toast.success(editingItem?.id ? "Atualizado com sucesso!" : "Criado com sucesso!");
      closeDialog();
    },
    onError: (e: any) => toast.error("Erro: " + e.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await (supabase as any).from(table).delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [table] });
      toast.success("Excluído com sucesso!");
      setDeleteId(null);
    },
    onError: (e: any) => toast.error("Erro: " + e.message),
  });

  const openCreate = () => {
    setEditingItem(null);
    const initial: Record<string, any> = {};
    fields.forEach(f => { initial[f.key] = f.type === "number" ? 0 : f.type === "boolean" ? false : ""; });
    setFormData(initial);
    setDialogOpen(true);
  };

  const openEdit = (row: Record<string, any>) => {
    setEditingItem(row);
    const data: Record<string, any> = {};
    fields.forEach(f => { data[f.key] = row[f.key] ?? ""; });
    data.id = row.id;
    setFormData(data);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setEditingItem(null);
    setFormData({});
  };

  const handleSave = () => {
    const missing = fields.filter(f => f.required && !formData[f.key]);
    if (missing.length) {
      toast.error(`Preencha: ${missing.map(f => f.label).join(", ")}`);
      return;
    }
    saveMutation.mutate(formData);
  };

  const filteredRows = rows.filter((row: any) =>
    !search || Object.values(row).some((v: any) => String(v ?? "").toLowerCase().includes(search.toLowerCase()))
  );

  const renderField = (field: FieldDef) => {
    const value = formData[field.key] ?? "";
    if (field.type === "textarea") {
      return <Textarea value={value} onChange={e => setFormData(p => ({ ...p, [field.key]: e.target.value }))} placeholder={field.label} />;
    }
    if (field.type === "select" && field.options) {
      return (
        <Select value={String(value)} onValueChange={v => setFormData(p => ({ ...p, [field.key]: v }))}>
          <SelectTrigger><SelectValue placeholder={`Selecione ${field.label}`} /></SelectTrigger>
          <SelectContent>
            {field.options.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
          </SelectContent>
        </Select>
      );
    }
    if (field.type === "number") {
      return <Input type="number" value={value} onChange={e => setFormData(p => ({ ...p, [field.key]: Number(e.target.value) }))} />;
    }
    if (field.type === "date") {
      return <Input type="date" value={value} onChange={e => setFormData(p => ({ ...p, [field.key]: e.target.value }))} />;
    }
    return <Input value={value} onChange={e => setFormData(p => ({ ...p, [field.key]: e.target.value }))} placeholder={field.label} />;
  };

  const formatCellValue = (val: any) => {
    if (val === null || val === undefined) return "—";
    if (typeof val === "boolean") return val ? "Sim" : "Não";
    return String(val);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="font-display text-lg md:text-xl font-bold text-foreground">{title}</h2>
          <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
        </div>
        <Button onClick={openCreate} className="bg-primary text-primary-foreground gap-1.5 self-start shrink-0">
          <Plus className="h-4 w-4" /> {addLabel}
        </Button>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar..." className="pl-10 bg-card" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>

      {/* Mobile Cards View */}
      <div className="block md:hidden space-y-3">
        {isLoading ? (
          <div className="flex items-center justify-center p-10">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <span className="ml-2 text-sm text-muted-foreground">Carregando...</span>
          </div>
        ) : filteredRows.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground py-8">Nenhum registro encontrado.</p>
        ) : filteredRows.map((row: any) => (
          <Card key={row.id} className="border-border p-4">
            <div className="space-y-2">
              {tableColumns.slice(0, 4).map(col => (
                <div key={col.key} className="flex justify-between gap-2">
                  <span className="text-xs text-muted-foreground shrink-0">{col.label}:</span>
                  <span className="text-sm text-foreground text-right truncate">{formatCellValue(row[col.key])}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-3 pt-3 border-t border-border">
              <Button variant="outline" size="sm" className="flex-1 text-xs gap-1" onClick={() => openEdit(row)}>
                <Pencil className="h-3 w-3" /> Editar
              </Button>
              <Button variant="outline" size="sm" className="text-xs gap-1 text-destructive hover:bg-destructive/10" onClick={() => setDeleteId(row.id)}>
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Desktop Table View */}
      <Card className="border-border overflow-hidden hidden md:block">
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="flex items-center justify-center p-10">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
              <span className="ml-2 text-sm text-muted-foreground">Carregando...</span>
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  {tableColumns.map(col => (
                    <th key={col.key} className="text-left p-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap">{col.label}</th>
                  ))}
                  <th className="text-right p-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.length === 0 ? (
                  <tr><td colSpan={tableColumns.length + 1} className="p-8 text-center text-sm text-muted-foreground">Nenhum registro encontrado.</td></tr>
                ) : filteredRows.map((row: any) => (
                  <tr key={row.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                    {tableColumns.map(col => (
                      <td key={col.key} className="p-3 text-sm text-foreground max-w-[200px] truncate">{formatCellValue(row[col.key])}</td>
                    ))}
                    <td className="p-3 text-right whitespace-nowrap space-x-1">
                      <Button variant="outline" size="sm" className="text-xs gap-1" onClick={() => openEdit(row)}>
                        <Pencil className="h-3 w-3" /> Editar
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs gap-1 text-destructive hover:bg-destructive/10" onClick={() => setDeleteId(row.id)}>
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Card>

      {/* Create/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto mx-4 sm:mx-auto">
          <DialogHeader>
            <DialogTitle>{editingItem?.id ? "Editar" : "Novo"} {title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            {fields.map(field => (
              <div key={field.key} className="space-y-1.5">
                <Label>{field.label} {field.required && <span className="text-destructive">*</span>}</Label>
                {renderField(field)}
              </div>
            ))}
          </div>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={closeDialog} className="w-full sm:w-auto">Cancelar</Button>
            <Button onClick={handleSave} disabled={saveMutation.isPending} className="w-full sm:w-auto">
              {saveMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-1" /> : null}
              {editingItem?.id ? "Salvar" : "Criar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <DialogContent className="max-w-sm mx-4 sm:mx-auto">
          <DialogHeader>
            <DialogTitle>Confirmar exclusão</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">Tem certeza que deseja excluir este registro? Esta ação não pode ser desfeita.</p>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setDeleteId(null)} className="w-full sm:w-auto">Cancelar</Button>
            <Button variant="destructive" onClick={() => deleteId && deleteMutation.mutate(deleteId)} disabled={deleteMutation.isPending} className="w-full sm:w-auto">
              {deleteMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-1" /> : null}
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
