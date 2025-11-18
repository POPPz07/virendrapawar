const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <p className="text-foreground/80 italic">
            "Built with clarity and curiosity."
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Virendra Pawar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
