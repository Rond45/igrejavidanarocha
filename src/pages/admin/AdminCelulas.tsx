import AdminCrudModule, { FieldDef } from "@/components/admin/AdminCrudModule";

const fields: FieldDef[] = [
  { key: "name", label: "Nome", required: true },
  { key: "leader", label: "Líder" },
  { key: "neighborhood", label: "Bairro" },
  { key: "city", label: "Cidade" },
  { key: "schedule", label: "Horário" },
  { key: "participants", label: "Participantes", type: "number" },
  { key: "interested", label: "Interessados", type: "number", showInTable: false },
  { key: "status", label: "Status", type: "select", options: ["Ativa", "Inativa"] },
];

export default function AdminCelulas() {
  return <AdminCrudModule title="Células" description="Gerencie os pequenos grupos da igreja." table="cell_groups" fields={fields} addLabel="Nova célula" />;
}
