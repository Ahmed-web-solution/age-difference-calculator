import { Link } from "react-router-dom";
import Calculator from "@/components/Calculator";
import logo from "@/assets/logo.svg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with gradient */}
      <header className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 py-8 px-4 neomorph-inset">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src={logo} alt="Age Calculator Logo" className="w-16 h-16" />
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Age Difference Calculator
            </h1>
          </div>
          <p className="text-center text-muted-foreground text-lg">
            Calculate the exact age gap between two people in years, months, and days
          </p>
        </div>
      </header>

      {/* Main Calculator */}
      <main className="py-12 px-4">
        <Calculator />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="text-center mt-6 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} FinCalcBox. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
