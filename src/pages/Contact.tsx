import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Mail, MessageCircle, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  "Brand Collaboration",
  "Acting / Skit",
  "Live Event / MC",
  "Speaking Engagement",
  "Other",
];

const socialLinks = [
  { name: "TikTok", url: "https://www.tiktok.com/@pomjey", primary: true },
  { name: "Instagram", url: "https://www.instagram.com/pomjey", primary: false },
  { name: "Facebook", url: "https://www.facebook.com/pomjey", primary: false },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual Formspree endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you within 48 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl">
              <p className="text-primary font-montserrat font-semibold mb-4 opacity-0 animate-fade-up">
                Let's Talk
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-foreground mb-6 opacity-0 animate-fade-up delay-100">
                Work With Me
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up delay-200">
                Have a project in mind? Let's discuss your brief and create
                something great together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Form */}
              <div className="opacity-0 animate-fade-up bg-background/90 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block font-montserrat font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      />
                    </div>

                    <div>
                      <label className="block font-montserrat font-medium text-foreground mb-2">
                        Organization / Brand
                      </label>
                      <Input
                        type="text"
                        name="organization"
                        placeholder="Company or brand name"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      />
                    </div>

                    <div>
                      <label className="block font-montserrat font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      />
                    </div>

                    <div>
                      <label className="block font-montserrat font-medium text-foreground mb-2">
                        Project Type *
                      </label>
                      <Select name="projectType" required>
                        <SelectTrigger className="bg-background border-border text-foreground">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block font-montserrat font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me about your project..."
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
                      />
                    </div>

                    <div>
                      <label className="block font-montserrat font-medium text-foreground mb-2">
                        Timeline / Event Date (optional)
                      </label>
                      <Input
                        type="text"
                        name="timeline"
                        placeholder="e.g., Q1 2025 or March 15, 2025"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="xl"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-16 bg-background rounded-2xl border border-border">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-poppins font-bold text-2xl text-foreground mb-4">
                      Message Received!
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Thanks for reaching out. I typically respond within 48
                      hours. Looking forward to connecting!
                    </p>
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div className="opacity-0 animate-fade-up delay-200">
                <div className="space-y-10">
                  {/* Email */}
                  <div>
                    <h3 className="font-montserrat font-semibold text-foreground mb-4">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@pomjey.com"
                      className="text-secondary hover:text-primary text-lg transition-colors"
                    >
                      hello@pomjey.com
                    </a>
                  </div>

                  {/* Social */}
                  <div>
                    <h3 className="font-montserrat font-semibold text-foreground mb-4">
                      Social Media
                    </h3>
                    <div className="space-y-3">
                      {socialLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 transition-colors ${
                            link.primary
                              ? "text-primary hover:text-primary/80"
                              : "text-secondary hover:text-primary"
                          }`}
                        >
                          {link.name}
                          {link.primary && (
                            <span className="text-xs bg-primary/20 px-2 py-0.5 rounded-full">
                              Primary
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp (Optional) */}
                  <div>
                    <h3 className="font-montserrat font-semibold text-foreground mb-4">
                      Quick Chat
                    </h3>
                    <Button variant="green" size="lg" asChild>
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>

                  {/* Response Time */}
                  <div className="bg-background rounded-2xl p-6 border border-border">
                    <h3 className="font-montserrat font-semibold text-foreground mb-3">
                      Response Time
                    </h3>
                    <p className="text-muted-foreground">
                      I typically respond within <span className="text-primary font-medium">48 hours</span>. 
                      For urgent inquiries, WhatsApp tends to be faster.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
