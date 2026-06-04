import AdminCrudModule, { FieldDef } from "@/components/admin/AdminCrudModule";

const fields: FieldDef[] = [
  { key: "name", label: "Nome", required: true },
  { key: "address", label: "Endereço" },
  { key: "city", label: "Cidade" },
  { key: "responsible", label: "Responsável" },
  { key: "contact", label: "Contato" },
  { key: "schedule", label: "Horários", showInTable: false },
  { key: "status", label: "Status", type: "select", options: ["Ativa", "Inativa"] },
];

export default function AdminUnidades() {
  return <AdminCrudModule title="Unidades" description="Gerencie as unidades da igreja." table="units" fields={fields} addLabel="Nova unidade" />;
}
