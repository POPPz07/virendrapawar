import { Card } from "@/components/ui/card";
import { Trophy, Calendar } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      date: "Aug 2024 – Oct 2024",
      title: "NetElixir AIgnition Hackathon",
      subtitle: "Top 10 Nationwide",
      points: [
        "Built ML-based media investment optimizer for e-commerce.",
        "Cleared multi-stage ML and strategy rounds.",
        "Ranked among top teams nationwide.",
      ],
    },
    {
      date: "Oct 2024",
      title: "Technosphinx Ideathon",
      subtitle: "1st Place Winner",
      points: [
        "Designed a complete idea on financial gamification in under 2 hours.",
        "Rapid research, structured solution, and strong presentation.",
        "Secured 1st place against multiple teams.",
      ],
    },
    {
      date: "Jul 2025 – Nov 2025",
      title: "Hack2Skill Hackathon",
      subtitle: "Semi-Finalist",
      points: [
        "Built TruthLens misinformation detection platform.",
        "Worked across frontend, backend, API, and AI logic.",
        "Advanced to semi-finals.",
      ],
    },
    {
      date: "Aug 2025 – Oct 2025",
      title: "Atomberg AtomQuest 2025",
      subtitle: "Semi-Finalist",
      points: [
        "Built Vacuum Robot Controller UI using HTML and JS for ESP8266.",
        "Enabled manual control, auto mode, and status monitoring.",
        "Selected in India's Top 100 teams.",
      ],
    },
    {
      date: "Sept 2025",
      title: "Smart India Hackathon",
      subtitle: "Internal — Top 10",
      points: [
        "Developed 'Yatri Suraksha,' a tourist safety and emergency system.",
        "Designed alerting, reporting, and authority workflow designs.",
        "Ranked among top 10 in the internal round.",
      ],
    },
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Achievements</h2>
          <p className="text-muted-foreground text-lg">Hackathons & Competitions</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="glass-card rounded-2xl p-6 hover-lift scroll-reveal border-border/50 hover:border-primary/50 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{achievement.date}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                    <p className="text-secondary font-medium">{achievement.subtitle}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {achievement.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
