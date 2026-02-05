import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Domestic from "./pages/Domestic";
import International from "./pages/International";
import Contact from "./pages/Contact";
import StickyFooterDemo from "./pages/StickyFooterDemo";
import NotFound from "./pages/NotFound";
import ScrollToHashElement from "./components/ScrollToHashElement";

// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";
import AdminLayout from "./components/AdminLayout";
import AdminRedirect from "./components/AdminRedirect";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToHashElement />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/domestic" element={<Domestic />} />
            <Route path="/international" element={<International />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<StickyFooterDemo />} />

            {/* Admin Routes */}
            <Route path="/admin">
              <Route index element={<AdminRedirect />} />
              <Route path="login" element={<AdminLogin />} />
              <Route element={<ProtectedRoute />}>
                <Route path="dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
                <Route path="enquiries" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
              </Route>
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

