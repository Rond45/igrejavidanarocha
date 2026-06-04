import { Outlet, Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Play, Calendar, Heart, Users, HandHeart, Gift, Bell, User } from "lucide-react";
import logoImg from "@/assets/logo-vida-na-rocha-color.png";

const tabs = [
  { icon: Home, label: "Início", path: "/app" },
  { icon: BookOpen, label: "Devocional", path: "/app/devocional" },
  { icon: Calendar, label: "Agenda", path: "/app/agenda" },
  { icon: Heart, label: "Oração", path: "/app/oracao" },
  { icon: User, label: "Perfil", path: "/app/perfil" },
];

const menuItems = [
  { icon: Play, label: "Mensagens", path: "/app/mensagens" },
  { icon: Users, label: "Células", path: "/app/celulas" },
  { icon: HandHeart, label: "Ministérios", path: "/app/ministerios" },
  { icon: Gift, label: "Doações", path: "/app/doacoes" },
  { icon: Bell, label: "Avisos", path: "/app/avisos" },
];

export default function AppLayout() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative">
      {/* App Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border px-3 sm:px-4 py-3 grid grid-cols-3 items-center">
        <div>{/* spacer */}</div>
        <Link to="/" className="flex items-center justify-center">
          <img src={logoImg} alt="Igreja Vida na Rocha" className="h-12 w-auto object-contain" />
        </Link>
        <div className="flex justify-end">
          <Link to="/app/avisos" className="relative p-2">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-destructive" />
          </Link>
        </div>
      </header>

      {/* Quick nav for non-tab pages */}
      {!["/app", "/app/devocional", "/app/agenda", "/app/oracao", "/app/perfil"].includes(location.pathname) && (
        <div className="bg-card border-b border-border px-3 py-2 flex gap-2 overflow-x-auto scrollbar-hide">
          {menuItems.map((m) => (
            <Link
              key={m.path}
              to={m.path}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                isActive(m.path) ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              <m.icon className="h-3.5 w-3.5" />
              {m.label}
            </Link>
          ))}
        </div>
      )}

      {/* Content */}
      <main className="flex-1 pb-20 overflow-x-hidden">
        <Outlet />
      </main>

      {/* Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-card/95 backdrop-blur-md border-t border-border z-50 safe-area-bottom">
        <div className="flex items-center justify-around py-2 px-1">
          {tabs.map((t) => (
            <Link
              key={t.path}
              to={t.path}
              className={`flex flex-col items-center gap-0.5 p-1.5 rounded-lg transition-colors min-w-0 ${
                isActive(t.path) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <t.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium truncate">{t.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
