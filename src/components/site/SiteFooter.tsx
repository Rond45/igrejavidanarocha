import { Link } from "react-router-dom";
import { Heart, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import logoImg from "@/assets/logo-familia-videira.png";

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="Família Videira" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Uma igreja que acolhe, transforma e conecta vidas através do amor de Deus. 
              Sob a liderança pastoral de Pr. Marcelo Barcellos.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/quem-somos" className="hover:opacity-100 transition-opacity">Quem Somos</Link></li>
              <li><Link to="/cultos" className="hover:opacity-100 transition-opacity">Cultos e Agenda</Link></li>
              <li><Link to="/ministerios" className="hover:opacity-100 transition-opacity">Ministérios</Link></li>
              <li><Link to="/celulas" className="hover:opacity-100 transition-opacity">Células</Link></li>
              <li><Link to="/eventos" className="hover:opacity-100 transition-opacity">Eventos</Link></li>
              <li><Link to="/doacoes" className="hover:opacity-100 transition-opacity">Doações</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Conteúdo</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/mensagens" className="hover:opacity-100 transition-opacity">Mensagens</Link></li>
              <li><Link to="/oracao" className="hover:opacity-100 transition-opacity">Pedidos de Oração</Link></li>
              <li><Link to="/galeria" className="hover:opacity-100 transition-opacity">Galeria</Link></li>
              <li><Link to="/baixe-app" className="hover:opacity-100 transition-opacity">Baixe o App</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Rua da Igreja, 100 — Centro</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(00) 00000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span className="break-all">contato@familiavideira.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-50">
          <p>© {new Date().getFullYear()} Família Videira. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="h-3 w-3 text-destructive" /> para a glória de Deus
          </p>
        </div>
      </div>
    </footer>
  );
}
