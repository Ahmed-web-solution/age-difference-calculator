import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import SEO from "@/components/SEO";
import { Calculator, Target, Users, Shield, Sparkles, TrendingUp, Globe, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us - Age Difference Calculator | FinCalcBox"
        description="Learn about FinCalcBox's Age Difference Calculator - a free, accurate tool for calculating age gaps. Discover our mission to provide accessible, privacy-focused calculation tools."
        canonicalUrl="https://age.fincalcbox.com/about"
      />
      
      <Navbar />
      
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton text="Back to Home" to="/" />
          </div>
          
          <div className="neomorph rounded-3xl p-8 md:p-12 bg-background">
            <h1 className="text-4xl font-bold mb-4 text-foreground">About FinCalcBox</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Providing free, accurate, and privacy-focused calculation tools for everyone
            </p>
            
            <div className="space-y-8 text-foreground/80 leading-relaxed">
              {/* Mission Section */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>Our Mission</span>
                </h2>
                <p className="mb-4">
                  At FinCalcBox, we believe that essential calculation tools should be accessible to everyone, 
                  free of charge, and designed with privacy and accuracy as top priorities. Our Age Difference 
                  Calculator is built to provide precise, instant results without requiring any personal data 
                  or registration.
                </p>
                <p>
                  We're committed to creating tools that are intuitive, accurate, and respectful of your privacy. 
                  Every calculation happens directly in your browser — we never store or transmit the dates you enter.
                </p>
              </section>

              {/* What We Offer */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                  <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>What We Offer</span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="neomorph-inset rounded-2xl p-6 bg-background/50">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles className="w-6 h-6 text-primary" aria-hidden="true" />
                      <h3 className="text-lg font-semibold text-foreground">Accurate Calculations</h3>
                    </div>
                    <p className="text-sm">
                      Advanced algorithms that properly handle leap years, varying month lengths, and 
                      calendar complexities to deliver precise results every time.
                    </p>
                  </div>

                  <div className="neomorph-inset rounded-2xl p-6 bg-background/50">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-primary" aria-hidden="true" />
                      <h3 className="text-lg font-semibold text-foreground">Privacy First</h3>
                    </div>
                    <p className="text-sm">
                      All calculations are performed locally in your browser. We don't collect, store, 
                      or transmit any of the dates you enter.
                    </p>
                  </div>

                  <div className="neomorph-inset rounded-2xl p-6 bg-background/50">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-6 h-6 text-primary" aria-hidden="true" />
                      <h3 className="text-lg font-semibold text-foreground">Free Forever</h3>
                    </div>
                    <p className="text-sm">
                      No subscriptions, no hidden fees, no limits. Our tools will always be completely 
                      free to use, unlimited times.
                    </p>
                  </div>

                  <div className="neomorph-inset rounded-2xl p-6 bg-background/50">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="w-6 h-6 text-primary" aria-hidden="true" />
                      <h3 className="text-lg font-semibold text-foreground">User-Friendly</h3>
                    </div>
                    <p className="text-sm">
                      Clean, modern interface designed for ease of use on any device. No learning 
                      curve — just enter dates and get instant results.
                    </p>
                  </div>
                </div>
              </section>

              {/* Who We Serve */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>Who We Serve</span>
                </h2>
                <p className="mb-4">
                  Our Age Difference Calculator is used by thousands of people worldwide for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Individuals curious about age gaps in relationships</li>
                  <li>HR professionals calculating employee ages for benefits eligibility</li>
                  <li>Healthcare providers determining age-specific treatment protocols</li>
                  <li>Researchers studying demographic data and age-related patterns</li>
                  <li>Educators teaching date mathematics and calendar systems</li>
                  <li>Genealogists researching family history and ancestry</li>
                  <li>Event planners calculating time spans for anniversaries and milestones</li>
                </ul>
              </section>

              {/* Our Commitment */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>Our Commitment to Quality</span>
                </h2>
                <p className="mb-4">
                  We continuously improve our tools based on user feedback and the latest web technologies. 
                  Our calculator is:
                </p>
                <div className="neomorph-inset rounded-2xl p-6 bg-background/50">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="text-primary font-bold">✓</div>
                      <div>
                        <strong className="text-foreground">Regularly Updated:</strong> We maintain and improve 
                        our code to ensure compatibility with modern browsers and devices.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="text-primary font-bold">✓</div>
                      <div>
                        <strong className="text-foreground">Thoroughly Tested:</strong> Every calculation method 
                        is rigorously tested to ensure accuracy across all scenarios.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="text-primary font-bold">✓</div>
                      <div>
                        <strong className="text-foreground">Accessible:</strong> Designed following web 
                        accessibility standards to be usable by everyone, regardless of ability.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="text-primary font-bold">✓</div>
                      <div>
                        <strong className="text-foreground">Fast & Reliable:</strong> Optimized for speed with 
                        offline functionality through Progressive Web App technology.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Technology */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>Technology & Privacy</span>
                </h2>
                <p className="mb-4">
                  Built with modern web technologies including React, TypeScript, and Progressive Web App 
                  capabilities, our calculator provides a fast, reliable experience on any device. All 
                  calculations are performed client-side using JavaScript's native Date object, ensuring 
                  your data never leaves your device.
                </p>
                <p>
                  We comply with GDPR, CCPA, and other international privacy regulations. For more details, 
                  please review our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and{" "}
                  <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>.
                </p>
              </section>

              {/* Contact */}
              <section className="border-t pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Get in Touch</h2>
                <p className="mb-4">
                  Have questions, suggestions, or feedback? We'd love to hear from you!
                </p>
                <div className="neomorph-inset rounded-2xl p-6 bg-background/50">
                  <p className="mb-2">
                    <strong className="text-foreground">Email:</strong> support@fincalcbox.com
                  </p>
                  <p>
                    <strong className="text-foreground">Contact Form:</strong>{" "}
                    <Link to="/contact" className="text-primary hover:underline">Click here</Link>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
