
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OrganizacjaPogrzebow from "./pages/services/OrganizacjaPogrzebow";
import OprawaMuzyczna from "./pages/services/OprawaMuzyczna";
import UslugiPogrzebowe from "./pages/services/UslugiPogrzebowe";
import Ekshumacja from "./pages/services/Ekshumacja";
import TransportZmarlych from "./pages/services/TransportZmarlych";
import Krematorium from "./pages/services/Krematorium";
import Asortyment from "./pages/asortyment/Asortyment";
import Trumny from "./pages/asortyment/Trumny";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Usługi routes */}
          <Route path="/uslugi" element={<UslugiPogrzebowe />} />
          <Route path="/uslugi/organizacja-pogrzebow" element={<OrganizacjaPogrzebow />} />
          <Route path="/uslugi/oprawa-muzyczna" element={<OprawaMuzyczna />} />
          <Route path="/uslugi/ekshumacja" element={<Ekshumacja />} />
          <Route path="/uslugi/transport" element={<TransportZmarlych />} />
          <Route path="/uslugi/krematorium" element={<Krematorium />} />
          
          {/* Asortyment routes */}
          <Route path="/asortyment" element={<Asortyment />} />
          <Route path="/asortyment/trumny" element={<Trumny />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
