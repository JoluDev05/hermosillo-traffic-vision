
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Incidentes from "./pages/Incidentes";
import Historial from "./pages/Historial";
import Eventos from "./pages/Eventos";
import Construcciones from "./pages/Construcciones";
import Analisis from "./pages/Analisis";
import Configuracion from "./pages/Configuracion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/incidentes" element={<Incidentes />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/construcciones" element={<Construcciones />} />
          <Route path="/analisis" element={<Analisis />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
