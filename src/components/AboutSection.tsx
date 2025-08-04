import { Brain, Users, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Brain,
      title: "AI Pioneer",
      description: "15+ years transforming data into intelligent solutions"
    },
    {
      icon: Users,
      title: "Thought Leader",
      description: "Founder of Data Science Masterminds community"
    },
    {
      icon: Lightbulb,
      title: "Innovation Expert",
      description: "Coach helping professionals leverage AI for career growth"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Delivered measurable impact for Fortune 500 companies"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-yellow via-neon-blue to-neon-purple"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-neon">Kunaal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-yellow to-neon-blue mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Professional photo */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-yellow via-neon-blue to-neon-purple rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-neon-yellow/20 rounded-2xl p-2 hover:border-neon-yellow/40 transition-all duration-300">
                <img 
                  src="/lovable-uploads/13241e3a-4afa-40e1-bd84-0113455bbadf.png"
                  alt="Kunaal Naik - AI, Data & Tech Strategist"
                  className="w-full h-auto rounded-xl object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Floating elements around the photo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-yellow/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-blue/20 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-neon-purple/20 rounded-full animate-pulse delay-2000"></div>
            </div>
          </div>

          {/* Story content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="prose prose-lg text-foreground/90 max-w-none">
              <p className="text-xl leading-relaxed">
                Kunaal Naik stands at the forefront of the AI revolution, with over{" "}
                <span className="text-neon-yellow font-semibold">15 years of experience</span> in 
                data science and emerging technologies. His journey began in traditional analytics 
                but has evolved into something far more transformative.
              </p>
              
              <p className="text-lg leading-relaxed">
                As the founder of <span className="text-neon-blue font-semibold">Data Science Masterminds</span>, 
                Kunaal has built a thriving community of over 10,000 professionals who are reshaping 
                their careers through AI. His transition from data scientist to{" "}
                <span className="text-neon-purple font-semibold">AI agent architect</span> represents 
                the future of work.
              </p>

              <p className="text-lg leading-relaxed">
                Today, Kunaal helps businesses and individuals harness the power of{" "}
                <span className="text-neon font-semibold">autonomous AI agents</span> to automate 
                complex workflows, accelerate decision-making, and unlock unprecedented growth. 
                His clients range from Fortune 500 companies to ambitious entrepreneurs ready 
                to embrace the agentic future.
              </p>

              <p className="text-lg leading-relaxed">
                As a sought-after <span className="text-neon-blue font-semibold">speaker and coach</span>, 
                Kunaal has delivered transformative training programs at prestigious institutions 
                including Dell, various IIMs, and numerous corporate workshops. His mission is clear: 
                democratize AI and empower the next generation of digital leaders.
              </p>
            </div>
          </div>

          {/* Achievement cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-3 lg:col-span-2">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border border-muted/20 rounded-xl hover:border-neon-yellow/30 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="p-3 bg-gradient-to-br from-neon-yellow/10 to-neon-blue/10 rounded-lg w-fit mb-4 group-hover:from-neon-yellow/20 group-hover:to-neon-blue/20 transition-all duration-300">
                  <achievement.icon className="w-8 h-8 text-neon-yellow group-hover:text-neon-blue transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote section */}
        <div className="mt-20 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            "The future belongs to those who can orchestrate AI agents to think, 
            act, and deliver results while they sleep. 
            <span className="text-neon"> I'm here to make that future your reality.</span>"
          </blockquote>
          <div className="mt-6 text-neon-blue font-semibold text-lg">
            — Kunaal Naik
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;