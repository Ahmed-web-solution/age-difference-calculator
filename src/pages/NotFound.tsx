import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="404 - Page Not Found | FinCalcBox"
        description="The page you're looking for doesn't exist. Return to the Age Calculator homepage."
        canonicalUrl="https://age.fincalcbox.com/404"
        noindex={true}
      />
      
      <Navbar />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <BackButton />
          </div>
          
          <div className="neomorph rounded-3xl p-12 md:p-16">
            <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="w-full sm:w-auto neomorph neomorph-hover bg-primary text-primary-foreground px-8 py-6 rounded-2xl text-lg">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
              
              <Link to="/blog">
                <Button variant="outline" className="w-full sm:w-auto neomorph px-8 py-6 rounded-2xl text-lg">
                  View Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
