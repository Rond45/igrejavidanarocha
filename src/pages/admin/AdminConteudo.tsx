import AdminCrudModule, { FieldDef } from "@/components/admin/AdminCrudModule";

const fields: FieldDef[] = [
  { key: "title", label: "Título", required: true },
  { key: "content_type", label: "Tipo", type: "select", options: ["Mensagem", "Devocional", "Banner", "Testemunho", "Vídeo"] },
  { key: "author", label: "Autor" },
  { key: "category", label: "Categoria", showInTable: false },
  { key: "body", label: "Conteúdo", type: "textarea", showInTable: false },
  { key: "media_url", label: "URL da Mídia", showInTable: false },
  { key: "status", label: "Status", type: "select", options: ["Rascunho", "Publicado", "Ativo", "Arquivado"] },
  { key: "featured", label: "Destaque", type: "select", options: ["true", "false"], showInTable: false },
];

export default function AdminConteudo() {
  return <AdminCrudModule title="Conteúdo" description="Gerencie devocionais, mensagens, vídeos, banners e testemunhos." table="content" fields={fields} addLabel="Novo conteúdo" />;
}
