import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Build from "./pages/Build";
import Repair from "./pages/Repair";
import Funding from "./pages/Funding";
import PersonalLoans from "./pages/PersonalLoans";
import CreditCards from "./pages/CreditCards";
import TradeLine from "./pages/TradeLine";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<Build />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/funding/personal-loans" element={<PersonalLoans />} />
          <Route path="/funding/credit-cards" element={<CreditCards />} />
          <Route path="/funding/trade-line" element={<TradeLine />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/apply" element={<Apply />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
