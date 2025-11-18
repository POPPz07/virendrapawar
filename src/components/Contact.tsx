import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">Let's build something great together</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="glass-card rounded-2xl p-8 scroll-reveal border-border/50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8 scroll-reveal">
            <Button
              size="icon"
              variant="outline"
              onClick={() => window.location.href = "mailto:virendra@example.com"}
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => window.open("https://linkedin.com", "_blank")}
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => window.open("https://github.com/POPPz07", "_blank")}
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
