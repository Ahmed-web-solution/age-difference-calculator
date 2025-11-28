import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="neomorph rounded-3xl p-8 md:p-12 bg-background">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
          
          <div className="space-y-6 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Acceptance of Terms</h2>
              <p>
                By using this Age Difference Calculator, you agree to these terms of service. 
                If you do not agree, please discontinue use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Use of Service</h2>
              <p>
                This calculator is provided for informational purposes only. 
                We make no guarantees about the accuracy of calculations, though we strive for precision.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitations</h2>
              <p>
                This service is provided "as is" without warranties of any kind. 
                We are not liable for any damages arising from use of this calculator.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. 
                Continued use of the service constitutes acceptance of modified terms.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <Link to="/" className="text-primary hover:underline font-medium">
              ← Back to Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
