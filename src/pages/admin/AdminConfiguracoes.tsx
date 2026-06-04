import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Globe, Shield, Palette, Bell } from "lucide-react";

const sections = [
  { icon: Building2, title: "Dados Institucionais", desc: "Nome, CNPJ, endereço e informações da igreja." },
  { icon: Globe, title: "Redes Sociais", desc: "Links do Instagram, Facebook, YouTube e WhatsApp." },
  { icon: Shield, title: "Permissões", desc: "Gerenciar perfis de acesso e permissões." },
  { icon: Palette, title: "Identidade Visual", desc: "Logo, cores e textos institucionais." },
  { icon: Bell, title: "Preferências", desc: "Notificações, destaques e configurações gerais." },
];

export default function AdminConfiguracoes() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-display text-xl font-bold text-foreground">Configurações</h2>
        <p className="text-sm text-muted-foreground">Configure dados institucionais, permissões e preferências.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((s) => (
          <Card key={s.title} className="border-border hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-5 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-sm">{s.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
