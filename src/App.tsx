import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import PWAUpdateNotification from "@/components/PWAUpdateNotification";
import ScrollToTop from "@/components/ScrollToTop";
import RouteLoader from "@/components/RouteLoader";
import PageLoader from "@/components/PageLoader";
import { pageview } from "@/lib/gtag";

// Lazy load all pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const BlogTags = lazy(() => import("./pages/BlogTags"));
const BlogTagFilter = lazy(() => import("./pages/BlogTagFilter"));
const NotFound = lazy(() => import("./pages/NotFound"));

// GA4 Analytics Listener Component
function GAListener() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* GA4 Analytics Listener */}
            <GAListener />
            
            {/* Route Loading Progress Bar */}
            <RouteLoader />
            
            {/* Scroll to top on route change */}
            <ScrollToTop />
            
            {/* PWA Update Notification */}
            <PWAUpdateNotification />
            
            {/* Suspense wrapper for lazy-loaded routes */}
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/tags" element={<BlogTags />} />
                <Route path="/blog/tags/:tag" element={<BlogTagFilter />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
