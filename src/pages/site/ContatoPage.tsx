import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

export default function ContatoPage() {
  return (
    <div>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Fale Conosco</h1>
          <p className="text-lg opacity-80">Estamos aqui para você. Entre em contato conosco.</p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Envie uma mensagem</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Nome completo" className="bg-background" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="E-mail" type="email" className="bg-background" />
                  <Input placeholder="Telefone" className="bg-background" />
                </div>
                <Input placeholder="Assunto" className="bg-background" />
                <Textarea placeholder="Sua mensagem..." rows={5} className="bg-background" />
                <Button className="w-full bg-primary text-primary-foreground font-semibold">Enviar mensagem</Button>
              </form>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Informações</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></div>
                  <div>
                    <p className="font-semibold text-foreground">Endereço</p>
                    <p className="text-sm text-muted-foreground">Rua da Igreja, 100 — Centro</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary"><Phone className="h-5 w-5" /></div>
                  <div>
                    <p className="font-semibold text-foreground">Telefone</p>
                    <p className="text-sm text-muted-foreground">(00) 00000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5" /></div>
                  <div>
                    <p className="font-semibold text-foreground">E-mail</p>
                    <p className="text-sm text-muted-foreground">contato@familiavideira.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary"><Clock className="h-5 w-5" /></div>
                  <div>
                    <p className="font-semibold text-foreground">Horário de Atendimento</p>
                    <p className="text-sm text-muted-foreground">Segunda a Sexta, 9h às 18h</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-semibold text-foreground mb-3">Redes Sociais</p>
                <div className="flex gap-3">
                  <a href="#" className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="h-5 w-5" /></a>
                  <a href="#" className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook className="h-5 w-5" /></a>
                  <a href="#" className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"><Youtube className="h-5 w-5" /></a>
                </div>
              </div>

              <div className="mt-8 w-full h-48 rounded-xl bg-muted" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
