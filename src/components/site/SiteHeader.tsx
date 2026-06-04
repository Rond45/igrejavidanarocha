import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo-familia-videira-gold.png";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Quem Somos", path: "/quem-somos" },
  { label: "Pastor", path: "/pastor" },
  { label: "Cultos", path: "/cultos" },
  { label: "Ministérios", path: "/ministerios" },
  { label: "Células", path: "/celulas" },
  { label: "Eventos", path: "/eventos" },
  { label: "Oração", path: "/oracao" },
  { label: "Contato", path: "/contato" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logoImg} alt="Família Videira" className="h-14 md:h-16 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`px-2.5 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                location.pathname === l.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Link to="/app">
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-1.5">
              <Smartphone className="h-4 w-4" />
              <span className="hidden sm:inline">App</span>
            </Button>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-card pb-4 animate-fade-in">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition-colors ${
                location.pathname === l.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
