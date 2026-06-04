import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface AdminModuleProps {
  title: string;
  description: string;
  columns: string[];
  rows: Record<string, string>[];
  addLabel?: string;
}

export default function AdminModule({ title, description, columns, rows, addLabel = "Adicionar" }: AdminModuleProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button className="bg-primary text-primary-foreground gap-1.5 self-start">
          <Plus className="h-4 w-4" /> {addLabel}
        </Button>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar..." className="pl-10 bg-card" />
        </div>
      </div>

      <Card className="border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                {columns.map((col) => (
                  <th key={col} className="text-left p-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{col}</th>
                ))}
                <th className="text-right p-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30">
                  {columns.map((col) => (
                    <td key={col} className="p-3 text-sm text-foreground">{row[col] || "—"}</td>
                  ))}
                  <td className="p-3 text-right">
                    <Button variant="outline" size="sm" className="text-xs">Editar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
