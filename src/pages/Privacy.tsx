import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import SEO from "@/components/SEO";
import { Shield, Database, Cookie, Settings, Link as LinkIcon, Globe, MapPin, Lock, Archive, Users, FileText, Mail } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy - Age Difference Calculator | FinCalcBox"
        description="Privacy Policy for Age Difference Calculator. Learn about our GDPR and CCPA compliance, data collection practices, and how we protect your information."
        canonicalUrl="https://age.fincalcbox.com/privacy"
      />
      
      <Navbar />
      
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton text="Back to Home" to="/" />
          </div>
          
          <div className="neomorph rounded-3xl p-8 md:p-12 bg-background">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last Updated: November 28, 2025</p>
          
          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Introduction</span>
              </h2>
              <p className="mb-4">
                At FinCalcBox ("we," "our," or "us"), we are committed to protecting your privacy and personal data. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
                our Age Difference Calculator service (the "Service").
              </p>
              <p>
                This policy complies with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Database className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Information We Collect</span>
              </h2>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground/90">Personal Data You Provide</h3>
              <p className="mb-4">
                <strong className="text-foreground">Calculator Inputs:</strong> The Age Difference Calculator performs all calculations 
                locally in your web browser. The dates you enter are <strong>NOT</strong> collected, stored, or transmitted to our servers. 
                Your calculation data remains completely private on your device.
              </p>
              <p className="mb-4">
                <strong className="text-foreground">Contact Information:</strong> If you contact us through our contact form, 
                we collect your name, email address, subject, and message content for the sole purpose of responding to your inquiry.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground/90 mt-6">Automatically Collected Information</h3>
              <p className="mb-4">
                When you visit our Service, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address (anonymized)</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device type and screen resolution</li>
              </ul>
              <p>This information is collected through cookies and similar tracking technologies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Cookie className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Cookies and Tracking Technologies</span>
              </h2>
              
              <div className="neomorph-inset rounded-2xl p-6 bg-background/50 mb-4">
                <h3 className="text-lg font-semibold mb-3 text-foreground">What Are Cookies?</h3>
                <p>
                  Cookies are small text files placed on your device to collect standard internet log information and visitor behavior. 
                  When you visit our Service, we may collect information from you automatically through cookies or similar technology.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground/90">Types of Cookies We Use</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Essential Cookies</h4>
                  <p>Required for the Service to function properly. These cannot be disabled.</p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Analytics Cookies</h4>
                  <p>Help us understand how visitors interact with our Service by collecting and reporting information anonymously. 
                  We may use Google Analytics or similar services.</p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Advertising Cookies</h4>
                  <p>May be used to show relevant advertisements. These cookies track your browsing habits and are provided by third-party advertisers.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-2xl">
                <p className="text-sm">
                  <strong className="text-foreground">Cookie Control:</strong> You can control and/or delete cookies as you wish. 
                  You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed. 
                  However, if you do this, you may have to manually adjust some preferences every time you visit our site.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>How We Use Your Information</span>
              </h2>
              <p className="mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide, maintain, and improve our Service</li>
                <li>To respond to your inquiries and support requests</li>
                <li>To analyze usage patterns and optimize user experience</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To comply with legal obligations and enforce our terms</li>
                <li>To display relevant advertisements (with your consent where required)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <LinkIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Third-Party Services</span>
              </h2>
              <p className="mb-4">We may employ third-party companies and services for the following purposes:</p>
              
              <div className="space-y-3">
                <div className="neomorph-inset rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">Analytics Services</h4>
                  <p className="text-sm">
                    <strong>Google Analytics:</strong> Helps us understand how users interact with our Service. 
                    Google Analytics collects information anonymously and reports website trends without identifying individual visitors. 
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                      Google Privacy Policy
                    </a>
                  </p>
                </div>
                
                <div className="neomorph-inset rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">Advertising Networks</h4>
                  <p className="text-sm">
                    <strong>Google AdSense:</strong> May display personalized or non-personalized advertisements. 
                    These services may use cookies and web beacons to collect information pursuant to their respective privacy policies.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>GDPR Compliance (EU Users)</span>
              </h2>
              <p className="mb-4">
                If you are a resident of the European Economic Area (EEA), you have certain data protection rights under GDPR:
              </p>
              
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="text-primary font-bold">→</div>
                  <div>
                    <strong className="text-foreground">Right to Access:</strong> You can request copies of your personal data.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-primary font-bold">→</div>
                  <div>
                    <strong className="text-foreground">Right to Rectification:</strong> You can request correction of inaccurate data.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-primary font-bold">→</div>
                  <div>
                    <strong className="text-foreground">Right to Erasure:</strong> You can request deletion of your personal data.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-primary font-bold">→</div>
                  <div>
                    <strong className="text-foreground">Right to Restrict Processing:</strong> You can request restriction of processing your data.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-primary font-bold">→</div>
                  <div>
                    <strong className="text-foreground">Right to Data Portability:</strong> You can request transfer of your data to another organization.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-primary font-bold">→</div>
                  <div>
                    <strong className="text-foreground">Right to Object:</strong> You can object to processing of your personal data.
                  </div>
                </div>
              </div>

              <p className="mt-4">
                To exercise any of these rights, please contact us at support@fincalcbox.com. 
                We will respond to your request within one month.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>CCPA Compliance (California Residents)</span>
              </h2>
              <p className="mb-4">
                If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA):
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Right to know what personal information is collected, used, shared, or sold</li>
                <li>Right to delete personal information held by businesses</li>
                <li>Right to opt-out of sale of personal information (we do NOT sell your data)</li>
                <li>Right to non-discrimination for exercising your CCPA rights</li>
              </ul>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-2xl">
                <p className="text-sm">
                  <strong className="text-foreground">Important Note:</strong> We do NOT sell your personal information to third parties. 
                  We only share anonymized, aggregated data with analytics providers to improve our Service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Data Security</span>
              </h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure hosting infrastructure</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the Internet is 100% secure. While we strive to protect your data, 
                we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Archive className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Data Retention</span>
              </h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                unless a longer retention period is required or permitted by law. Contact form submissions are typically deleted after 
                2 years unless required for legal purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Children's Privacy</span>
              </h2>
              <p>
                Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from 
                children under 13. If you are a parent or guardian and believe your child has provided us with personal information, 
                please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Changes to This Privacy Policy</span>
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, 
                or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and 
                updating the "Last Updated" date. Your continued use of the Service after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
                <span>Contact Information</span>
              </h2>
              <p className="mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
