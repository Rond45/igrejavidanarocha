import AdminCrudModule, { FieldDef } from "@/components/admin/AdminCrudModule";

const fields: FieldDef[] = [
  { key: "name", label: "Nome", required: true },
  { key: "phone", label: "Telefone" },
  { key: "email", label: "E-mail", showInTable: false },
  { key: "city", label: "Cidade" },
  { key: "unit_name", label: "Unidade" },
  { key: "ministry", label: "Ministério" },
  { key: "status", label: "Status", type: "select", options: ["Ativo", "Inativo", "Afastado"] },
  { key: "notes", label: "Observações", type: "textarea", showInTable: false },
];

export default function AdminMembros() {
  return <AdminCrudModule title="Membros" description="Cadastro e acompanhamento de membros." table="members" fields={fields} addLabel="Novo membro" />;
}
