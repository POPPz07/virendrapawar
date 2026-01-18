import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's build something great together
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="glass-card rounded-2xl p-8 scroll-reveal border-border/50">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-secondary"
                size="lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8 scroll-reveal">
            <Button
              size="icon"
              variant="outline"
              onClick={() =>
                (window.location.href = "mailto:virendrapawar1402@gmail.com")
              }
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/virendra-pawar-826284293",
                  "_blank"
                )
              }
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() =>
                window.open("https://github.com/POPPz07", "_blank")
              }
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
