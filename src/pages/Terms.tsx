import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import SEO from "@/components/SEO";
import { FileCheck, Info, UserCheck, Copyright, AlertTriangle, Shield, Scale, ExternalLink, Lock, XCircle, RefreshCw, FileText, Mail } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms of Service - Age Difference Calculator | FinCalcBox"
        description="Terms of Service for the Age Difference Calculator. Read our usage terms, disclaimers, and user responsibilities."
        canonicalUrl="https://age.fincalcbox.com/terms"
      />
      
      <Navbar />
      
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <BackButton text="Back to Home" to="/" />
          </div>
          
          <div className="neomorph rounded-3xl p-8 md:p-12 bg-background">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last Updated: November 28, 2025</p>
          
          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <FileCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>1. Acceptance of Terms</span>
              </h2>
              <p className="mb-4">
                Welcome to FinCalcBox's Age Difference Calculator (the "Service"). By accessing or using our Service, 
                you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, 
                please do not use the Service.
              </p>
              <p>
                We reserve the right to modify these Terms at any time. Your continued use of the Service after 
                changes are posted constitutes your acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Info className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>2. Description of Service</span>
              </h2>
              <p className="mb-4">
                The Age Difference Calculator is a free online tool that calculates the time difference between two dates. 
                The Service provides:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Age difference calculations in years, months, and days</li>
                <li>Total time span in days, weeks, and hours</li>
                <li>Accurate leap year handling</li>
                <li>Result sharing and copying functionality</li>
                <li>Educational content about age calculations</li>
              </ul>
              <p>
                All calculations are performed client-side in your web browser. We do not store or transmit the dates you enter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>3. User Responsibilities</span>
              </h2>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground/90">Acceptable Use</h3>
              <p className="mb-4">You agree to use the Service only for lawful purposes. You shall not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Use the Service in any manner that could damage, disable, or impair the Service</li>
                <li>Attempt to gain unauthorized access to any portion of the Service</li>
                <li>Use any automated means to access the Service for purposes of scraping or data mining</li>
                <li>Transmit any viruses, malware, or harmful code</li>
                <li>Violate any applicable local, state, national, or international law</li>
                <li>Infringe upon the intellectual property rights of others</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground/90 mt-6">Age Requirement</h3>
              <p>
                The Service is intended for users of all ages. However, users under 13 years of age should use the Service 
                under parental supervision and consent, in accordance with COPPA (Children's Online Privacy Protection Act) requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Copyright className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>4. Intellectual Property Rights</span>
              </h2>
              <p className="mb-4">
                The Service, including all content, features, functionality, source code, design, and logos, is owned by 
                FinCalcBox and is protected by international copyright, trademark, patent, trade secret, and other 
                intellectual property laws.
              </p>
              <p className="mb-4">
                You are granted a limited, non-exclusive, non-transferable license to access and use the Service for 
                personal, non-commercial purposes. This license does not include any rights to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Reproduce, duplicate, copy, or resell any portion of the Service</li>
                <li>Modify, adapt, or create derivative works</li>
                <li>Reverse engineer, decompile, or disassemble the Service</li>
                <li>Remove or alter any copyright, trademark, or proprietary notices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>5. Disclaimer of Warranties</span>
              </h2>
              
              <div className="neomorph-inset rounded-2xl p-6 bg-amber-50 dark:bg-amber-950/30 mb-4">
                <p className="mb-4">
                  <strong className="text-foreground text-lg">IMPORTANT - PLEASE READ CAREFULLY</strong>
                </p>
                <p className="mb-4">
                  THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, 
                  EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Warranties of merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement</li>
                  <li>Accuracy, reliability, or completeness of calculations</li>
                  <li>Uninterrupted or error-free operation</li>
                </ul>
              </div>

              <p className="mb-4">
                While we strive to provide accurate calculations using industry-standard algorithms and accounting for 
                leap years and calendar complexities, we make no guarantees about the accuracy of results. Users should 
                independently verify critical calculations.
              </p>
              <p>
                The Service is for informational and educational purposes only and should not be relied upon as the 
                sole basis for legal, medical, financial, or other professional decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>6. Limitation of Liability</span>
              </h2>
              
              <div className="border-l-4 border-primary pl-6 mb-4">
                <p className="mb-4">
                  <strong className="text-foreground">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</strong>
                </p>
                <p>
                  IN NO EVENT SHALL FINCALCBOX, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY 
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO 
                  LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, 
                  WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY.
                </p>
              </div>

              <p className="mb-4">
                Our total liability to you for all claims arising from or related to the Service shall not exceed 
                $100 USD or the amount you paid to use the Service (which is $0 for free users), whichever is greater.
              </p>
              <p>
                Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, 
                our liability shall be limited to the maximum extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>7. Indemnification</span>
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless FinCalcBox and its officers, directors, employees, 
                contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, 
                judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising 
                out of or relating to your violation of these Terms or your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>8. Third-Party Links and Services</span>
              </h2>
              <p className="mb-4">
                The Service may contain links to third-party websites, advertisers, or services that are not owned 
                or controlled by FinCalcBox. We have no control over and assume no responsibility for the content, 
                privacy policies, or practices of any third-party sites or services.
              </p>
              <p>
                You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused 
                by your use of any third-party content, goods, or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>9. Privacy and Data Protection</span>
              </h2>
              <p>
                Your use of the Service is also governed by our <Link to="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>, 
                which explains how we collect, use, and protect your information. By using the Service, you consent 
                to our data practices as described in the Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>10. Termination</span>
              </h2>
              <p className="mb-4">
                We reserve the right to terminate or suspend your access to the Service immediately, without prior 
                notice or liability, for any reason, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Breach of these Terms</li>
                <li>Fraudulent, abusive, or illegal activity</li>
                <li>Extended periods of inactivity</li>
                <li>Technical or security reasons</li>
              </ul>
              <p>
                Upon termination, your right to use the Service will immediately cease. All provisions of these Terms 
                which by their nature should survive termination shall survive, including ownership provisions, 
                warranty disclaimers, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>11. Governing Law and Jurisdiction</span>
              </h2>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which 
                FinCalcBox operates, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or your use of the Service shall be resolved through binding 
                arbitration in accordance with the rules of the American Arbitration Association, except where 
                prohibited by law. You agree to waive any right to a jury trial or to participate in a class action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>12. Changes to the Service</span>
              </h2>
              <p>
                We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, 
                with or without notice. We shall not be liable to you or any third party for any modification, 
                suspension, or discontinuance of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>13. Severability</span>
              </h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid by a court of competent 
                jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary so that 
                these Terms shall otherwise remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <FileCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>14. Entire Agreement</span>
              </h2>
              <p>
                These Terms, together with our Privacy Policy and Disclaimer, constitute the entire agreement between 
                you and FinCalcBox regarding the use of the Service and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>15. Contact Information</span>
              </h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us:
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

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/30 rounded-2xl">
              <p className="text-sm">
                <strong className="text-foreground">Acknowledgment:</strong> By using the Age Difference Calculator, 
                you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
