import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TechStack = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const technologies = [
    { name: "Python", category: "Languages" },
    { name: "C++", category: "Languages" },
    { name: "SQL", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "FastAPI", category: "Frameworks" },
    { name: "Flask", category: "Frameworks" },
    { name: "React.js", category: "Frameworks" },
    { name: "REST APIs", category: "Frameworks" },
    { name: "Dialogflow", category: "Frameworks" },
    { name: "Babylon.js", category: "3D" },
    { name: "Three.js", category: "3D" },
    { name: "MongoDB", category: "Databases" },
    { name: "MySQL", category: "Databases" },
    { name: "PostgreSQL", category: "Databases" },
    { name: "SQLite", category: "Databases" },
    { name: "Firestore", category: "Databases" },
    { name: "Neo4j", category: "Databases" },
    { name: "GCP", category: "Cloud" },
    { name: "Cloud Run", category: "Cloud" },
    { name: "Firebase", category: "Cloud" },
    { name: "AWS", category: "Cloud" },
    { name: "MLOps", category: "Cloud" },
    { name: "Machine Learning", category: "AI/ML" },
    { name: "Deep Learning", category: "AI/ML" },
    { name: "LLMs", category: "AI/ML" },
    { name: "ETL Pipelines", category: "Data" },
    { name: "Data Engineering", category: "Data" },
    { name: "System Design", category: "Data" },
    { name: "GitHub Actions", category: "DevOps" },
    { name: "Docker", category: "DevOps" },
    { name: "JWT", category: "Security" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const microLines = [
    "Clarity over complexity — both in code and in architecture.",
    "Big problems become manageable when broken into simple, buildable steps.",
    "Clean logic, strong structure, and maintainability guide every system I build.",
    "Every component serves a purpose — nothing exists without intent.",
  ];

  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Tech Stack</h2>
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto scroll-reveal">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-12 py-8"
            style={{ scrollbarWidth: "none" }}
          >
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 glass-card rounded-xl px-6 py-4 hover-lift cursor-pointer min-w-[150px]"
              >
                <p className="text-sm text-secondary font-medium mb-1">{tech.category}</p>
                <p className="text-foreground font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>

          <Button
            size="icon"
            variant="ghost"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Micro-lines */}
        <div className="grid md:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
          {microLines.map((line, index) => (
            <div key={index} className="glass-card rounded-lg p-4 scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <p className="text-foreground/80 text-sm italic">"{line}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
