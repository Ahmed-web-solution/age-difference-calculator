import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import SEO from "@/components/SEO";
import { GraduationCap, CheckCircle, AlertCircle, ShieldAlert, Link as LinkIcon, Scale, AlertTriangle, RefreshCw, UserCheck, Mail } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Disclaimer - Age Difference Calculator | FinCalcBox"
        description="Legal disclaimer for the Age Difference Calculator. Understand the limitations and proper use of our calculation tool."
        canonicalUrl="https://age.fincalcbox.com/disclaimer"
      />
      
      <Navbar />
      
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <BackButton text="Back to Home" to="/" />
          </div>
          
          <div className="neomorph rounded-3xl p-8 md:p-12 bg-background">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Disclaimer</h1>
          <p className="text-sm text-muted-foreground mb-8">Last Updated: November 28, 2025</p>
          
          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <div className="neomorph-inset rounded-2xl p-6 bg-amber-50 dark:bg-amber-950/30">
              <h2 className="text-xl font-semibold mb-3 text-foreground">Important Notice</h2>
              <p>
                The information provided by FinCalcBox's Age Difference Calculator is for educational and informational 
                purposes only. By using this Service, you acknowledge and accept the limitations and disclaimers outlined below.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>1. Educational Purpose Only</span>
              </h2>
              <p className="mb-4">
                The Age Difference Calculator is designed solely as an educational and informational tool. It is intended to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Provide quick age difference calculations for personal curiosity</li>
                <li>Demonstrate date mathematics and calendar systems</li>
                <li>Assist with general planning and estimation purposes</li>
                <li>Offer educational insights into time calculations and leap years</li>
              </ul>
              <p>
                The calculator should <strong className="text-foreground">NOT</strong> be used as the sole basis for legal, 
                medical, financial, or other professional decisions requiring precise age verification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>2. Accuracy and Reliability</span>
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Calculation Methodology</h3>
                  <p>
                    Our calculator uses industry-standard algorithms based on JavaScript's native Date object to compute age 
                    differences. It accounts for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Gregorian calendar system (post-1582)</li>
                    <li>Leap years (including century year rules)</li>
                    <li>Variable month lengths</li>
                    <li>Time zone considerations (based on browser settings)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Limitations</h3>
                  <p className="mb-3">
                    While we strive for maximum accuracy, users should be aware of the following limitations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-foreground">Historical Dates:</strong> Calculations for dates before the adoption of 
                      the Gregorian calendar (varies by country, generally 1582 or later) may not account for Julian calendar differences.
                    </li>
                    <li>
                      <strong className="text-foreground">Time Zones:</strong> Calculations are based on your browser's time zone 
                      settings and may not reflect UTC or other specific time zones.
                    </li>
                    <li>
                      <strong className="text-foreground">Daylight Saving Time:</strong> DST transitions may affect calculations 
                      involving specific times of day (though date-only calculations are unaffected).
                    </li>
                    <li>
                      <strong className="text-foreground">Input Errors:</strong> Results are only as accurate as the dates you input. 
                      Verify your date entries for correctness.
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Verification Recommended</h3>
                  <p>
                    For critical applications (legal documents, official certifications, regulatory compliance, etc.), 
                    always verify calculations independently through official sources or qualified professionals.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>3. No Professional Advice</span>
              </h2>
              
              <div className="neomorph-inset rounded-2xl p-6 bg-background/50">
                <p className="mb-4">
                  <strong className="text-foreground text-lg">The Age Difference Calculator does NOT provide:</strong>
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">✗</span>
                    <div>
                      <strong className="text-foreground">Legal Advice:</strong> Do not use for age of consent, contract eligibility, 
                      retirement qualification, or other legal age requirements without consulting an attorney.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">✗</span>
                    <div>
                      <strong className="text-foreground">Medical Advice:</strong> Do not use for pediatric development assessments, 
                      geriatric care planning, or medical eligibility without consulting healthcare professionals.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">✗</span>
                    <div>
                      <strong className="text-foreground">Financial Advice:</strong> Do not use for pension calculations, 
                      insurance coverage determination, or financial planning without consulting financial advisors.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold shrink-0">✗</span>
                    <div>
                      <strong className="text-foreground">Relationship Advice:</strong> Age gap information should not be the 
                      sole factor in relationship decisions. Seek counseling or professional guidance for relationship concerns.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <ShieldAlert className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>4. Liability Limitations</span>
              </h2>
              <p className="mb-4">
                <strong className="text-foreground">FinCalcBox and its affiliates shall NOT be held liable for:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Any errors, omissions, or inaccuracies in calculations</li>
                <li>Decisions made based on calculator results</li>
                <li>Financial losses or missed opportunities resulting from reliance on the Service</li>
                <li>Legal consequences arising from age-related determinations made using the calculator</li>
                <li>Damages arising from interrupted service, bugs, or technical issues</li>
                <li>Third-party claims related to your use of the calculator results</li>
              </ul>
              <p className="mt-4">
                Users assume full responsibility for verifying results and consulting appropriate professionals before 
                making important decisions based on calculator outputs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <LinkIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>5. Third-Party Services and Links</span>
              </h2>
              <p className="mb-4">
                The Service may display ads, links, or integrations with third-party services (such as social media sharing, 
                analytics, or advertising networks). We are not responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The accuracy, legality, or content of third-party websites or services</li>
                <li>Privacy practices of third-party advertisers or analytics providers</li>
                <li>Products, services, or claims made by third parties</li>
                <li>Damages resulting from interactions with third-party content</li>
              </ul>
              <p className="mt-4">
                Users should review the terms and privacy policies of any third-party services they interact with through our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>6. Age-Related Legal Considerations</span>
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-2xl">
                  <h3 className="font-semibold text-foreground mb-2">Age of Consent</h3>
                  <p className="text-sm">
                    Laws regarding age of consent vary by jurisdiction. This calculator provides mathematical age differences 
                    only and does not account for legal age of consent laws. Always consult local laws and legal professionals.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-2xl">
                  <h3 className="font-semibold text-foreground mb-2">Employment and Benefits</h3>
                  <p className="text-sm">
                    Age requirements for employment, retirement benefits, Social Security, pensions, and other age-restricted 
                    programs have specific legal definitions that may differ from our calculations. Consult HR departments or 
                    government agencies for official determinations.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-2xl">
                  <h3 className="font-semibold text-foreground mb-2">Educational and Medical Milestones</h3>
                  <p className="text-sm">
                    School enrollment ages, vaccination schedules, developmental milestones, and medical screening requirements 
                    often have jurisdiction-specific rules. Use this calculator as a reference only and verify with schools 
                    or healthcare providers.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>7. No Warranty</span>
              </h2>
              <p className="mb-4">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND. We expressly disclaim all 
                warranties, whether express, implied, statutory, or otherwise, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Implied warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy, completeness, or reliability of results</li>
                <li>Continuous, uninterrupted, or error-free operation</li>
                <li>Correction of defects or errors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>8. Updates and Changes</span>
              </h2>
              <p>
                We may update, modify, or discontinue the calculator or this disclaimer at any time without prior notice. 
                Your continued use of the Service after changes constitutes acceptance of the modified disclaimer. Check this 
                page periodically for updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>9. User Responsibility</span>
              </h2>
              <p className="mb-4">
                By using the Age Difference Calculator, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Verify all results independently before relying on them</li>
                <li>Consult qualified professionals for legal, medical, or financial decisions</li>
                <li>Use the calculator responsibly and ethically</li>
                <li>Not hold FinCalcBox liable for any outcomes based on calculator results</li>
                <li>Understand the limitations detailed in this disclaimer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>10. Contact Information</span>
              </h2>
              <p className="mb-4">
                If you have questions about this disclaimer or need clarification about the calculator's limitations, please contact us:
              </p>
              <div className="neomorph-inset rounded-2xl p-6 bg-background/50">
                <p className="mb-2"><strong className="text-foreground">Email:</strong> support@fincalcbox.com</p>
                <p className="mb-2"><strong className="text-foreground">Website:</strong> https://age.fincalcbox.com</p>
                <p>
                  <strong className="text-foreground">Contact Form:</strong>{" "}
                  <Link to="/contact" className="text-primary hover:underline">Click here</Link>
                </p>
              </div>
            </section>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
              <p className="text-sm">
                <strong className="text-foreground">Acknowledgment:</strong> By using the Age Difference Calculator, you acknowledge 
                that you have read and understood this disclaimer and agree to use the Service at your own risk, understanding its 
                limitations and educational purpose.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
