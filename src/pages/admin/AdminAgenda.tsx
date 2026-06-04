import AdminCrudModule, { FieldDef } from "@/components/admin/AdminCrudModule";

const fields: FieldDef[] = [
  { key: "title", label: "Evento", required: true },
  { key: "event_type", label: "Tipo", type: "select", options: ["Culto", "Evento", "Campanha", "Conferência", "Reunião"] },
  { key: "event_date", label: "Data", type: "date" },
  { key: "time", label: "Horário" },
  { key: "unit_name", label: "Unidade" },
  { key: "location", label: "Local", showInTable: false },
  { key: "responsible", label: "Responsável", showInTable: false },
  { key: "status", label: "Status", type: "select", options: ["Ativo", "Cancelado", "Encerrado", "Inscrições abertas"] },
  { key: "description", label: "Descrição", type: "textarea", showInTable: false },
];

export default function AdminAgenda() {
  return <AdminCrudModule title="Agenda" description="Gerencie cultos, eventos, campanhas e conferências." table="agenda" fields={fields} addLabel="Novo evento" />;
}
