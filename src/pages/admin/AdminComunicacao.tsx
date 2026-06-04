import AdminCrudModule, { FieldDef } from "@/components/admin/AdminCrudModule";

const fields: FieldDef[] = [
  { key: "title", label: "Título", required: true },
  { key: "comm_type", label: "Tipo", type: "select", options: ["Aviso", "Notificação", "Comunicado", "Convite"] },
  { key: "target_audience", label: "Público", type: "select", options: ["Todos", "Membros", "Líderes", "Jovens", "Casais"] },
  { key: "unit_name", label: "Unidade" },
  { key: "message", label: "Mensagem", type: "textarea", showInTable: false },
  { key: "status", label: "Status", type: "select", options: ["Rascunho", "Ativo", "Enviado", "Arquivado"] },
];

export default function AdminComunicacao() {
  return <AdminCrudModule title="Comunicação" description="Avisos, notificações e comunicados segmentados." table="communications" fields={fields} addLabel="Novo comunicado" />;
}
