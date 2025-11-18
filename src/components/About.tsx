const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* About Me */}
          <div className="glass-card rounded-2xl p-8 hover-lift scroll-reveal">
            <h2 className="text-3xl font-bold mb-6 gradient-text">About Me</h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm an engineer who blends full-stack development with applied machine learning, cloud fundamentals, and practical problem-solving. My work revolves around clarity, clean architecture, and real-world impact.
            </p>
          </div>

          {/* Career Goals */}
          <div className="glass-card rounded-2xl p-8 hover-lift scroll-reveal">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Career Goals</h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              My aim is to build intelligent, scalable systems — from API design to ML pipelines and advanced interactive tools. I'm focused on backend engineering, ML applications, cloud workflows, and visualization.
            </p>
          </div>

          {/* Tech Philosophy */}
          <div className="glass-card rounded-2xl p-8 hover-lift scroll-reveal">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Tech Philosophy</h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I believe in building systems that are clean, understandable, and easy to maintain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
