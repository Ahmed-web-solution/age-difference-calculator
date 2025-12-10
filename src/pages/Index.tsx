import { Link } from "react-router-dom";
import Calculator from "@/components/Calculator";
import SeoContent from "@/components/SeoContent";
import Navbar from "@/components/Navbar";
import AdContainer from "@/components/AdContainer";
import BlogPreview from "@/components/BlogPreview";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#age-calculator" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground focus:rounded-br-lg"
      >
        Skip to main content
      </a>
      <SEO
        title="Age Difference Calculator - Calculate Age Gap Between Two People"
        description="Free age difference calculator to find the exact age gap between two people in years, months, and days. Simple, accurate, and easy to use."
        canonicalUrl="https://age.fincalcbox.com"
      />
      
      {/* Navbar - Fixed/sticky for accessibility */}
      <Navbar />

      {/* HERO SECTION - Full viewport height */}
      <Hero />

      {/* Top Ad - Reduced padding */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 sm:py-4 md:py-6">
        <AdContainer position="top" />
      </div>

      {/* Main Calculator Section - Mobile optimized */}
      <main id="age-calculator" role="main" className="py-6 sm:py-8 md:py-12 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-background/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 neomorph">
            <Calculator />
          </div>
        </div>
        
        {/* SEO Content Section - Reduced padding */}
        <div className="mt-8 sm:mt-12 md:mt-16 bg-gradient-to-b from-background to-muted/20 py-6 sm:py-8 md:py-12">
          <SeoContent />
        </div>

        {/* Mid-Content Ad - Reduced padding */}
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">
          <AdContainer position="incontent" />
        </div>

        {/* Blog Preview Section */}
        <BlogPreview />

        {/* Below Blog Section Ad - Reduced padding */}
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">
          <AdContainer position="bottom" />
        </div>
      </main>

      {/* Above Footer Ad - Reduced padding */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 sm:py-4 md:py-6">
        <AdContainer position="bottom" />
      </div>

      {/* Footer - Mobile optimized */}
      <footer role="contentinfo" className="bg-gradient-to-r from-muted/30 via-muted/20 to-muted/30 py-6 sm:py-8 md:py-12 px-3 sm:px-4 border-t border-border mt-8 sm:mt-10 md:mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          </div>
          <div className="text-center mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} FinCalcBox. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
