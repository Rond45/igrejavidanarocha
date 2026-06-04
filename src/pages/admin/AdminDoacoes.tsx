import AdminCrudModule, { FieldDef } from "@/components/admin/AdminCrudModule";

const fields: FieldDef[] = [
  { key: "campaign", label: "Campanha", required: true },
  { key: "description", label: "Descrição", type: "textarea", showInTable: false },
  { key: "total_amount", label: "Valor Total", type: "number" },
  { key: "contributions_count", label: "Contribuições", type: "number" },
  { key: "period", label: "Período" },
  { key: "status", label: "Status", type: "select", options: ["Ativo", "Encerrado", "Planejado"] },
];

export default function AdminDoacoes() {
  return <AdminCrudModule title="Doações" description="Campanhas, registros e histórico de contribuições." table="donations" fields={fields} addLabel="Nova campanha" />;
}
