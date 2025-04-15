import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Import components
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import OrganizacjaPogrzebow from "./pages/services/OrganizacjaPogrzebow";
import OprawaMuzyczna from "./pages/services/OprawaMuzyczna";
import UslugiPogrzebowe from "./pages/services/UslugiPogrzebowe";

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
              <Route path="/organizacja-pogrzebow" element={<OrganizacjaPogrzebow />} />
              <Route path="/oprawa-muzyczna" element={<OprawaMuzyczna />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HelmetProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
