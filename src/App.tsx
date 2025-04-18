import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Import components
import Index from './pages/Index';
import NotFound from './pages/NotFound';

// Import all services from the services directory
import UslugiPogrzebowe from "./pages/services/UslugiPogrzebowe";
import OrganizacjaPogrzebow from "./pages/services/OrganizacjaPogrzebow";
import OprawaMuzyczna from "./pages/services/OprawaMuzyczna";
import Ekshumacja from "./pages/services/Ekshumacja";
import Transport from "./pages/services/TransportZmarlych";
import Krematorium from "./pages/services/Krematorium";

// Import asortyment pages
import Asortyment from "./pages/asortyment/Asortyment";
import Odziez from "./pages/asortyment/Odziez";
import Trumny from "./pages/asortyment/Trumny";
import Urny from "./pages/asortyment/Urny";
import Wiazanki from "./pages/asortyment/Wiazanki";
import Wience from "./pages/asortyment/Wience";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <HelmetProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/uslugi" element={<UslugiPogrzebowe />} />
              <Route path="/uslugi/organizacja-pogrzebow" element={<OrganizacjaPogrzebow />} />
              <Route path="/uslugi/oprawa-muzyczna" element={<OprawaMuzyczna />} />
              <Route path="/uslugi/ekshumacja" element={<Ekshumacja />} />
              <Route path="/uslugi/transport" element={<Transport />} />
              <Route path="/uslugi/krematorium" element={<Krematorium />} />
              <Route path="/asortyment" element={<Asortyment />} />
              <Route path="/asortyment/odziez" element={<Odziez />} />
              <Route path="/asortyment/trumny" element={<Trumny />} />
              <Route path="/asortyment/urny" element={<Urny />} />
              <Route path="/asortyment/wiazanki" element={<Wiazanki />} />
              <Route path="/asortyment/wience" element={<Wience />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HelmetProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
