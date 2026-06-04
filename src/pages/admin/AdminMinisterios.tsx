import AdminCrudModule, { FieldDef } from "@/components/admin/AdminCrudModule";

const fields: FieldDef[] = [
  { key: "name", label: "Nome", required: true },
  { key: "description", label: "Descrição", type: "textarea", showInTable: false },
  { key: "leader", label: "Líder" },
  { key: "team_count", label: "Equipe", type: "number" },
  { key: "volunteers_count", label: "Voluntários", type: "number" },
  { key: "status", label: "Status", type: "select", options: ["Ativo", "Inativo"] },
];

export default function AdminMinisterios() {
  return <AdminCrudModule title="Ministérios" description="Gerencie os ministérios da igreja." table="ministries" fields={fields} addLabel="Novo ministério" />;
}
