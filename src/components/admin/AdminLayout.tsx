import { Outlet, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, FileText, Calendar, Building2, Users, UserPlus, Heart,
  Grid3X3, HandHeart, CalendarDays, MessageSquare, Gift, BarChart3, Settings, Menu, X, LogOut
} from "lucide-react";
import { useState } from "react";
import logoImg from "@/assets/logo-familia-videira.png";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: FileText, label: "Conteúdo", path: "/admin/conteudo" },
  { icon: Calendar, label: "Agenda", path: "/admin/agenda" },
  { icon: Building2, label: "Unidades", path: "/admin/unidades" },
  { icon: Users, label: "Membros", path: "/admin/membros" },
  { icon: UserPlus, label: "Visitantes", path: "/admin/visitantes" },
  { icon: Heart, label: "Oração", path: "/admin/oracao" },
  { icon: Grid3X3, label: "Células", path: "/admin/celulas" },
  { icon: HandHeart, label: "Ministérios", path: "/admin/ministerios" },
  { icon: CalendarDays, label: "Eventos", path: "/admin/eventos" },
  { icon: MessageSquare, label: "Comunicação", path: "/admin/comunicacao" },
  { icon: Gift, label: "Doações", path: "/admin/doacoes" },
  { icon: BarChart3, label: "Relatórios", path: "/admin/relatorios" },
  { icon: Settings, label: "Configurações", path: "/admin/configuracoes" },
];

export default function AdminLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-muted/30">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-foreground text-card transform transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center gap-2 p-4 border-b border-card/10">
          <img src={logoImg} alt="Família Videira" className="h-8 w-auto max-w-[120px]" />
          <div className="min-w-0">
            <p className="font-display font-bold text-sm truncate">Família Videira</p>
            <p className="text-[10px] opacity-50">Painel Administrativo</p>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden ml-auto p-1 shrink-0"><X className="h-4 w-4" /></button>
        </div>

        <nav className="p-2 space-y-0.5 overflow-y-auto h-[calc(100vh-120px)]">
          {menuItems.map((m) => (
            <Link
              key={m.path}
              to={m.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                location.pathname === m.path
                  ? "bg-primary text-primary-foreground"
                  : "text-card/70 hover:text-card hover:bg-card/10"
              }`}
            >
              <m.icon className="h-4 w-4 shrink-0" />
              {m.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-card/10">
          <Link to="/" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-card/50 hover:text-card hover:bg-card/10">
            <LogOut className="h-4 w-4" /> Voltar ao site
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-foreground/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <div className="flex-1 lg:ml-64 min-w-0">
        <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-md border-b border-border h-14 flex items-center px-4 gap-3">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-md hover:bg-muted">
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="font-display font-bold text-foreground truncate">
            {menuItems.find((m) => m.path === location.pathname)?.label || "Admin"}
          </h1>
        </header>
        <main className="p-3 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
