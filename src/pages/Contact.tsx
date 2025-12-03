import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import SEO from "@/components/SEO";
import { Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Validate message length
    if (formData.message.length < 10) {
      toast.error("Message must be at least 10 characters long");
      setIsSubmitting(false);
      return;
    }

    try {
      // Using Formspree - REPLACE 'YOUR_FORM_ID' with your actual Formspree form ID
      // Sign up at https://formspree.io to get your form ID
      const response = await fetch("https://formspree.io/f/xzzngpqw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Message sent! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us - Age Difference Calculator | FinCalcBox"
        description="Get in touch with the FinCalcBox team. We're here to help with any questions about our age calculator tool."
        canonicalUrl="https://age.fincalcbox.com/contact"
      />
      
      <Navbar />
      
      <div className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <BackButton text="Back to Home" to="/" />
          </div>
          
          <div className="neomorph rounded-3xl p-8 md:p-12 bg-background">
            <h1 className="text-4xl font-bold mb-4 text-foreground flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:items-center sm:gap-3">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" aria-hidden="true" />
              <span>Contact Us</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Have a question or suggestion? We'd love to hear from you!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="neomorph-inset border-0 bg-background h-12 rounded-2xl"
                  placeholder="Your name"
                  aria-required="true"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="neomorph-inset border-0 bg-background h-12 rounded-2xl"
                  placeholder="your@email.com"
                  aria-required="true"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="subject" className="text-foreground font-medium">
                  Subject <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="neomorph-inset border-0 bg-background h-12 rounded-2xl"
                  placeholder="How can we help?"
                  aria-required="true"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-foreground font-medium">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="neomorph-inset border-0 bg-background rounded-2xl resize-none"
                  placeholder="Your message... (minimum 10 characters)"
                  aria-required="true"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 rounded-2xl text-lg font-medium neomorph neomorph-hover bg-primary text-primary-foreground hover:bg-primary/90 border-0 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
