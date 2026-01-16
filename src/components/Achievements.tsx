import { Card } from "@/components/ui/card";
import { Trophy, Calendar } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      date: "Aug 2024 – Oct 2024",
      title: "NetElixir AIgnition Hackathon",
      subtitle: "Top 10 Nationwide",
      points: [
        "First major technical hackathon — strong performance from the beginning.",
        "Built an ML-based media investment optimizer using Random Forest Regression.",
        "Learned marketing-focused ML and multi-stage evaluation strategies.",
      ],
    },
    {
      date: "Oct 2024",
      title: "Technosphinx Ideathon",
      subtitle: "1st Place Winner",
      points: [
        "On-the-spot challenge: topic revealed at start, had 2 hours to research, ideate, design workflows, and present.",
        "Practiced rapid structured thinking and clear communication under pressure.",
        "Won 1st place among competing teams.",
      ],
    },
    {
      date: "Jul 2025 – Nov 2025",
      title: "Hack2Skill Hackathon",
      subtitle: "Semi-Finalist",
      points: [
        "Built TruthLens misinformation detection system using Cloud Run, Firebase, Firestore, Gemini + Vertex AI.",
        "Learned practical multimodal AI workflows, scalable serverless deployment, and cloud architecture.",
        "Advanced to the semi-final round.",
      ],
    },
    {
      date: "Aug 2025 – Oct 2025",
      title: "Atomberg AtomQuest 2025",
      subtitle: "Semi-Finalist — Top 100 in India",
      points: [
        "First exposure to hardware–software integrated development.",
        "Built UI for a vacuum robot controller and understood real embedded-software interaction.",
        "Learned component integration, robotics workflows, and collaborating with hardware teams.",
      ],
    },
    {
      date: "Sept 2025",
      title: "Smart India Hackathon",
      subtitle: "Top 10 Internal Selection",
      points: [
        "24-hour onsite hackathon — continuous iteration under time pressure.",
        "Designed alerting, reporting, emergency-response logic for 'Yatri Suraksha.'",
        "Learned teamwork under fatigue, role clarity, and execution discipline.",
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
