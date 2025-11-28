import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="neomorph rounded-3xl p-8 md:p-12 bg-background">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          
          <div className="space-y-6 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
              <p>
                This Age Difference Calculator does not collect, store, or transmit any personal information. 
                All calculations are performed locally in your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookies</h2>
              <p>
                We may use cookies for analytics purposes to improve user experience. 
                These cookies do not contain personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Services</h2>
              <p>
                We may use third-party services for analytics and advertisements. 
                These services may collect information as outlined in their respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact</h2>
              <p>
                For privacy concerns, please visit our <Link to="/contact" className="text-primary hover:underline">contact page</Link>.
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

export default Privacy;
