import AdminCrudModule, { FieldDef } from "@/components/admin/AdminCrudModule";

const fields: FieldDef[] = [
  { key: "title", label: "Evento", required: true },
  { key: "event_type", label: "Tipo", type: "select", options: ["Evento", "Conferência", "Encontro", "Retiro", "Workshop"] },
  { key: "start_date", label: "Data Início", type: "date" },
  { key: "end_date", label: "Data Fim", type: "date", showInTable: false },
  { key: "time", label: "Horário", showInTable: false },
  { key: "max_capacity", label: "Vagas", type: "number" },
  { key: "registrations_count", label: "Inscritos", type: "number" },
  { key: "unit_name", label: "Unidade" },
  { key: "status", label: "Status", type: "select", options: ["Aberto", "Encerrado", "Cancelado", "Lotado"] },
  { key: "description", label: "Descrição", type: "textarea", showInTable: false },
];

export default function AdminEventos() {
  return <AdminCrudModule title="Eventos" description="Gerencie eventos, inscrições e check-in." table="events" fields={fields} addLabel="Novo evento" />;
}
