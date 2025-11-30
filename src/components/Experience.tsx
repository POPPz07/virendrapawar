import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Users } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience & Leadership</h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Professional Experience */}
          <Card className="glass-card rounded-2xl p-8 hover-lift scroll-reveal border-border/50">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-7 w-7 text-white" />
              </div>
              <div className="space-y-4 flex-grow">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Trainee Software Engineer</h3>
                  <p className="text-secondary font-medium">Equations Work</p>
                  <p className="text-sm text-muted-foreground">Jan–Mar 2025</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/80">Built 3D graph visualizers using Babylon.js and Neo4j.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/80">Integrated Google Search API and DuckDuckGo for contextual data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/80">Used OpenAI API for information refinement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/80">Implemented JWT authentication and LLM-based fake-info classifier.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* What I Bring */}
          <Card className="glass-card rounded-2xl p-8 hover-lift scroll-reveal border-border/50">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                <Users className="h-7 w-7 text-white" />
              </div>
              <div className="space-y-4 flex-grow">
                <h3 className="text-2xl font-bold text-foreground">What I Bring to Teams</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-foreground/80"><span className="text-primary font-semibold">Consistency</span> — I build reliable systems.</p>
                    <p className="text-foreground/80"><span className="text-primary font-semibold">Communication</span> — I simplify complex problems.</p>
                    <p className="text-foreground/80"><span className="text-primary font-semibold">Ownership</span> — I take responsibility end-to-end.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-foreground/80"><span className="text-primary font-semibold">Execution</span> — I work well under pressure.</p>
                    <p className="text-foreground/80"><span className="text-primary font-semibold">Collaboration</span> — I keep teams aligned.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* College Journey */}
          <Card className="glass-card rounded-2xl p-8 hover-lift scroll-reveal border-border/50">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <div className="space-y-4 flex-grow">
                <h3 className="text-2xl font-bold text-foreground">College Journey</h3>
                <p className="text-foreground/80">
                  <span className="font-semibold text-foreground">Marathwada Mitramandal’s College of Engineering, Savitribai Phule Pune University (2022–2026)</span>
                </p>
                <p className="text-foreground/80">
                  Currently pursuing final-year <span className="underline decoration-primary decoration-2 underline-offset-4 font-semibold"> computer engineering </span>  
                  with strong foundations in computer fundamentals, data structures, algorithms, and system design. Balanced academics with projects, hackathons, internships, and club engagement.
                </p>
                
                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">College Clubs and Leadership</h4>
                  <div className="space-y-2 mb-4">
                    <p className="text-foreground/80"><span className="text-primary">•</span> Joint Secretary — CSI MMCOE</p>
                    <p className="text-foreground/80"><span className="text-primary">•</span> Committee Member — CSI MMCOE</p>
                    <p className="text-foreground/80"><span className="text-primary">•</span> Event Head — MSOC MMCOE</p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-4 bg-primary/5">
                    <p className="text-sm font-semibold text-foreground mb-2">Learnings:</p>
                    <p className="text-sm text-foreground/80">
                      Coordinated teams and executed events end-to-end. Learned to create momentum, align teams, adapt plans, and make decisions under pressure. Strengthened leadership, planning, teamwork, and communication skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
