import AdminCrudModule, { FieldDef } from "@/components/admin/AdminCrudModule";

const fields: FieldDef[] = [
  { key: "name", label: "Nome", required: true },
  { key: "phone", label: "Telefone", showInTable: false },
  { key: "city", label: "Cidade", showInTable: false },
  { key: "request", label: "Pedido", required: true },
  { key: "urgency", label: "Urgência", type: "select", options: ["Normal", "Alta", "Urgente"] },
  { key: "is_private", label: "Privado", type: "select", options: ["true", "false"] },
  { key: "status", label: "Status", type: "select", options: ["Em oração", "Respondido", "Encerrado"] },
  { key: "responsible", label: "Responsável", showInTable: false },
  { key: "response", label: "Retorno", type: "textarea", showInTable: false },
];

export default function AdminOracao() {
  return <AdminCrudModule title="Pedidos de Oração" description="Gerencie e acompanhe os pedidos de oração." table="prayer_requests" fields={fields} addLabel="Novo pedido" />;
}
