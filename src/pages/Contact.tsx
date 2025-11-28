import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send to a backend
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="neomorph rounded-3xl p-8 md:p-12 bg-background">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Contact Us</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="neomorph-inset border-0 bg-background h-12 rounded-2xl"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="neomorph-inset border-0 bg-background h-12 rounded-2xl"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="neomorph-inset border-0 bg-background h-12 rounded-2xl"
                placeholder="How can we help?"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="neomorph-inset border-0 bg-background rounded-2xl resize-none"
                placeholder="Your message..."
              />
            </div>

            <Button
              type="submit"
              className="w-full h-14 rounded-2xl text-lg font-medium neomorph neomorph-hover bg-primary text-primary-foreground hover:bg-primary/90 border-0 transition-all duration-300"
            >
              Send Message
            </Button>
          </form>

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

export default Contact;
