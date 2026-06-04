import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import SiteLayout from "./components/site/SiteLayout";
import HomePage from "./pages/site/HomePage";
import QuemSomosPage from "./pages/site/QuemSomosPage";
import VisaoPage from "./pages/site/VisaoPage";
import PastorPage from "./pages/site/PastorPage";
import UnidadesPage from "./pages/site/UnidadesPage";
import CultosPage from "./pages/site/CultosPage";
import OracaoPage from "./pages/site/OracaoPage";
import MinisteriosPage from "./pages/site/MinisteriosPage";
import CelulasPage from "./pages/site/CelulasPage";
import EventosPage from "./pages/site/EventosPage";
import EventoNoiteExtraordinarioPage from "./pages/site/EventoNoiteExtraordinarioPage";
import MensagensPage from "./pages/site/MensagensPage";
import GaleriaPage from "./pages/site/GaleriaPage";
import DoacoesPage from "./pages/site/DoacoesPage";
import ContatoPage from "./pages/site/ContatoPage";
import BaixeAppPage from "./pages/site/BaixeAppPage";

import AppLayout from "./components/app/AppLayout";
import AppHomePage from "./pages/app/AppHomePage";
import AppDevocionalPage from "./pages/app/AppDevocionalPage";
import AppMensagensPage from "./pages/app/AppMensagensPage";
import AppAgendaPage from "./pages/app/AppAgendaPage";
import AppOracaoPage from "./pages/app/AppOracaoPage";
import AppCelulasPage from "./pages/app/AppCelulasPage";
import AppMinisteriosPage from "./pages/app/AppMinisteriosPage";
import AppDoacoesPage from "./pages/app/AppDoacoesPage";
import AppAvisosPage from "./pages/app/AppAvisosPage";
import AppPerfilPage from "./pages/app/AppPerfilPage";

import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminConteudo from "./pages/admin/AdminConteudo";
import AdminAgenda from "./pages/admin/AdminAgenda";
import AdminUnidades from "./pages/admin/AdminUnidades";
import AdminMembros from "./pages/admin/AdminMembros";
import AdminVisitantes from "./pages/admin/AdminVisitantes";
import AdminOracao from "./pages/admin/AdminOracao";
import AdminCelulas from "./pages/admin/AdminCelulas";
import AdminMinisterios from "./pages/admin/AdminMinisterios";
import AdminEventos from "./pages/admin/AdminEventos";
import AdminComunicacao from "./pages/admin/AdminComunicacao";
import AdminDoacoes from "./pages/admin/AdminDoacoes";
import AdminRelatorios from "./pages/admin/AdminRelatorios";
import AdminConfiguracoes from "./pages/admin/AdminConfiguracoes";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* SITE PÚBLICO */}
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/quem-somos" element={<QuemSomosPage />} />
            <Route path="/visao" element={<VisaoPage />} />
            <Route path="/pastor" element={<PastorPage />} />
            <Route path="/unidades" element={<UnidadesPage />} />
            <Route path="/cultos" element={<CultosPage />} />
            <Route path="/oracao" element={<OracaoPage />} />
            <Route path="/ministerios" element={<MinisteriosPage />} />
            <Route path="/celulas" element={<CelulasPage />} />
            <Route path="/eventos" element={<EventosPage />} />
            <Route path="/eventos/noite-do-extraordinario" element={<EventoNoiteExtraordinarioPage />} />
            <Route path="/mensagens" element={<MensagensPage />} />
            <Route path="/galeria" element={<GaleriaPage />} />
            <Route path="/doacoes" element={<DoacoesPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/baixe-app" element={<BaixeAppPage />} />
          </Route>

          {/* APP DA IGREJA */}
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<AppHomePage />} />
            <Route path="devocional" element={<AppDevocionalPage />} />
            <Route path="mensagens" element={<AppMensagensPage />} />
            <Route path="agenda" element={<AppAgendaPage />} />
            <Route path="oracao" element={<AppOracaoPage />} />
            <Route path="celulas" element={<AppCelulasPage />} />
            <Route path="ministerios" element={<AppMinisteriosPage />} />
            <Route path="doacoes" element={<AppDoacoesPage />} />
            <Route path="avisos" element={<AppAvisosPage />} />
            <Route path="perfil" element={<AppPerfilPage />} />
          </Route>

          {/* PAINEL ADMINISTRATIVO */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="conteudo" element={<AdminConteudo />} />
            <Route path="agenda" element={<AdminAgenda />} />
            <Route path="unidades" element={<AdminUnidades />} />
            <Route path="membros" element={<AdminMembros />} />
            <Route path="visitantes" element={<AdminVisitantes />} />
            <Route path="oracao" element={<AdminOracao />} />
            <Route path="celulas" element={<AdminCelulas />} />
            <Route path="ministerios" element={<AdminMinisterios />} />
            <Route path="eventos" element={<AdminEventos />} />
            <Route path="comunicacao" element={<AdminComunicacao />} />
            <Route path="doacoes" element={<AdminDoacoes />} />
            <Route path="relatorios" element={<AdminRelatorios />} />
            <Route path="configuracoes" element={<AdminConfiguracoes />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
