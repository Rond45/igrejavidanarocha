import AdminCrudModule, { FieldDef } from "@/components/admin/AdminCrudModule";

const fields: FieldDef[] = [
  { key: "name", label: "Nome", required: true },
  { key: "phone", label: "Telefone" },
  { key: "city", label: "Cidade" },
  { key: "origin", label: "Origem", showInTable: false },
  { key: "visit_date", label: "Data da Visita", type: "date" },
  { key: "unit_name", label: "Unidade" },
  { key: "interest", label: "Interesse", showInTable: false },
  { key: "follow_up_status", label: "Acompanhamento", type: "select", options: ["Aguardando", "Contatado", "Retornou", "Integrado", "Sem interesse"] },
  { key: "notes", label: "Observações", type: "textarea", showInTable: false },
];

export default function AdminVisitantes() {
  return <AdminCrudModule title="Visitantes" description="CRM de visitantes e acompanhamento." table="visitors" fields={fields} addLabel="Novo visitante" />;
}
