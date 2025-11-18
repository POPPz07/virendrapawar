
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]" />
      
      {/* Floating particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 right-40 w-3 h-3 bg-primary rounded-full animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-mono text-secondary">Hello, I'm</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">Virendra Pawar</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Full-Stack Developer • ML/AI Engineer • Cloud/DevOps (Basics)
              </p>
              <p className="text-lg text-foreground/80 max-w-2xl">
                Engineering reliable APIs, intelligent ML systems, and scalable cloud-ready applications.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 shadow-lg hover:shadow-primary/50"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://drive.google.com/uc?export=download&id=1RU8Mhqfx1sKfGlkhI3eGrnltivNYGmAq", "_blank")}
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.open("https://github.com/POPPz07", "_blank")}
                className="hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.open("https://linkedin.com", "_blank")}
                className="hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.location.href = "mailto:virendra@example.com"}
                className="hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right side - Profile image with glow effect */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-glow" />
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-500">
                <img
                  src={profileImage}
                  alt="Virendra Pawar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
