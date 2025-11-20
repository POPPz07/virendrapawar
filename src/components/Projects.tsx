import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TruthLens — Misinformation Detection WebApp",
      subtitle: "Hack2Skill",
      tech: "React, FastAPI, Cloud Run, Gemini API, Vertex AI, Firebase",
      description: [
        "Built during a Google-backed hackathon, this system uses Gemini for multimodal reasoning and Vertex AI + Google Search for deeper fact-verification.",
        "Designed the workflow so users see both the verdict and supporting evidence from multiple trusted sources.",
        "Implemented Firebase Auth, Firestore tracking, and deployed using Cloud Run and Firebase Hosting."
      ],
      github: "https://github.com/POPPz07/misinformation-combating-tool",
      live: "https://flash-clover-476914-h6.web.app/workspace",
    },
    {
      title: "Code Vulnerability Detection System",
      tech: "Python, scikit-learn, AST Parsing",
      description: [
        "Created to address inconsistent coding practices and the rise of vibe-coding.",
        "Uses AST-based preprocessing and local ML models to detect insecure or low-quality code patterns without external APIs.",
        "Designed the full architecture — preprocessing pipeline, ML logic, and the air-gapped deployment vision.",
        "A complex, ongoing full-stack + ML project exploring static analysis and secure coding."
      ],
      github: "https://github.com/POPPz07/Code-vulnerability-and-assessment",
    },
    {
      title: "Hybrid Movie Recommendation System",
      tech: "React, Flask, MongoDB Atlas, scikit-learn",
      description: [
        "My first full-stack + ML project, built to solve my own problem of manually tracking and discovering movies.",
        "Supports watchlists, history tracking, and hybrid recommendations using TF-IDF, cosine similarity, and SVD.",
        "Runs through automated ML pipelines and exposes a clean REST API powering the React frontend."
      ],
      github: "https://github.com/POPPz07/movie-recommendation-system",
    },
    {
      title: "E-commerce Aggregator Web App",
      tech: "Flask, BeautifulSoup, SQLite",
      description: [
        "My first complete web app, solving the difficulty of comparing prices across multiple websites manually.",
        "Scraped and aggregated product data through custom ETL pipelines and stored structured data in SQLite.",
        "Built backend scraping logic, REST APIs, and a clean UI for instant comparison."
      ],
      github: "https://github.com/POPPz07/E-commerce-aggregator",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Philosophy */}
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">How I Approach Projects</h2>
          <div className="space-y-2 max-w-3xl mx-auto">
            <p className="text-xl text-foreground/90">I don't build random projects — I build solutions.</p>
            <p className="text-xl text-foreground/90">Every project here solves a real-world problem.</p>
            <p className="text-xl text-foreground/90">Everything I create has purpose, clarity, and impact.</p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-12 scroll-reveal">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="glass-card rounded-2xl p-6 hover-lift group cursor-pointer border-border/50 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {project.subtitle && (
                    <span className="text-sm font-medium text-secondary">{project.subtitle}</span>
                  )}
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{project.tech}</p>
                  <ul className="space-y-2">
                    {project.description.map((line, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground/80">{line}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.github, "_blank")}
                      className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    {project.live && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.live, "_blank")}
                        className="border-secondary/50 hover:bg-secondary/10 hover:border-secondary transition-all"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* More Projects CTA */}
        <div className="text-center scroll-reveal">
          <p className="text-lg text-muted-foreground mb-4">See more projects on GitHub</p>
          <Button
            onClick={() => window.open("https://github.com/POPPz07", "_blank")}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
          >
            <Github className="h-5 w-5 mr-2" />
            github.com/POPPz07
          </Button>
          <p className="text-sm text-muted-foreground mt-4 italic">Every repo is a chapter in my growth.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
