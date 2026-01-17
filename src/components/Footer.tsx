import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Virendra Pawar. All rights reserved.
          </p>
          <p className="text-sm text-foreground/80">
            Portfolio crafted with precision and purpose.
          </p>
          <div className="flex gap-3 justify-center pt-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => window.location.href = "mailto:virendrapawar1402@gmail.com"}
              className="hover:bg-primary/10 hover:text-primary transition-all"
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => window.open("https://www.linkedin.com/in/virendra-pawar-826284293", "_blank")}
              className="hover:bg-primary/10 hover:text-primary transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => window.open("https://github.com/POPPz07", "_blank")}
              className="hover:bg-primary/10 hover:text-primary transition-all"
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
