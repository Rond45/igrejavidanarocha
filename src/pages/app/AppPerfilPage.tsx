import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, MapPin, Heart, Calendar, Bell, LogOut } from "lucide-react";

export default function AppPerfilPage() {
  return (
    <div className="p-4 space-y-5">
      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center">
          <User className="h-8 w-8 text-muted-foreground" />
        </div>
        <h1 className="font-display text-xl font-bold text-foreground">Visitante</h1>
        <p className="text-sm text-muted-foreground">Faça login para acessar seu perfil completo</p>
        <Button size="sm" className="mt-3 bg-primary text-primary-foreground">Fazer login</Button>
      </div>

      <Card className="border-border">
        <CardContent className="p-0">
          {[
            { icon: User, label: "Dados pessoais" },
            { icon: MapPin, label: "Minha unidade" },
            { icon: Heart, label: "Meus pedidos de oração" },
            { icon: Calendar, label: "Meus eventos" },
            { icon: Bell, label: "Preferências de notificações" },
          ].map((item) => (
            <button key={item.label} className="w-full flex items-center gap-3 p-4 border-b border-border last:border-0 text-left hover:bg-muted/50 transition-colors">
              <item.icon className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">{item.label}</span>
            </button>
          ))}
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full text-destructive border-destructive/20 gap-2">
        <LogOut className="h-4 w-4" /> Sair
      </Button>
    </div>
  );
}
