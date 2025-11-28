import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="neomorph rounded-3xl p-8 md:p-12 bg-background">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Disclaimer</h1>
          
          <div className="space-y-6 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">General Information</h2>
              <p>
                The Age Difference Calculator provides age calculations based on the dates you input. 
                While we strive for accuracy, the results should not be considered as professional advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Accuracy</h2>
              <p>
                We make every effort to ensure our calculations are accurate. However, we cannot guarantee 
                100% accuracy in all scenarios. Users should verify critical calculations independently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">No Professional Advice</h2>
              <p>
                This tool is for informational purposes only and should not be construed as professional, 
                legal, or financial advice. Consult appropriate professionals for specific guidance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Liability</h2>
              <p>
                We shall not be held liable for any errors, omissions, or results obtained from the use 
                of this calculator. Use at your own risk.
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

export default Disclaimer;
