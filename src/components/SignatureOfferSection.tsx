import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Zap, Target, TrendingUp, Rocket } from "lucide-react";

const SignatureOfferSection = () => {
  const benefits = [
    "Build 5+ custom AI agents from scratch",
    "Deploy automation workflows that save 20+ hours/week",
    "Master the latest AI frameworks and tools",
    "Create revenue-generating AI solutions",
    "Join an exclusive community of AI innovators",
    "Get 1-on-1 mentorship from Kunaal Naik"
  ];

  const modules = [
    {
      icon: Zap,
      title: "AI Agent Fundamentals",
      description: "Master the core concepts and architectures"
    },
    {
      icon: Target,
      title: "Business Application Design",
      description: "Identify and solve real-world problems"
    },
    {
      icon: TrendingUp,
      title: "Monetization Strategies",
      description: "Turn your AI agents into revenue streams"
    },
    {
      icon: Rocket,
      title: "Deployment & Scaling",
      description: "Launch and optimize your AI solutions"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background with grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background grid-bg"></div>
      
      {/* Spotlight effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-yellow/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-yellow/10 border border-neon-yellow/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-neon-yellow" />
            <span className="text-neon-yellow font-semibold">SIGNATURE PROGRAM</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            The AI Agent <span className="text-neon bg-gradient-to-r from-neon-yellow to-neon-blue bg-clip-text text-transparent">Accelerator</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A hands-on program to build, deploy, and monetize custom AI agents for your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Program details */}
          <div>
            <div className="p-8 bg-card/50 backdrop-blur-sm border border-neon-yellow/20 rounded-2xl mb-8">
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                What You'll Achieve
              </h3>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 rounded-xl">
                <div className="text-3xl font-bold text-neon-blue mb-2">12 Weeks</div>
                <div className="text-muted-foreground">Intensive Training</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-neon-yellow/10 to-neon-green/10 border border-neon-yellow/20 rounded-xl">
                <div className="text-3xl font-bold text-neon-yellow mb-2">5+ Agents</div>
                <div className="text-muted-foreground">Built & Deployed</div>
              </div>
            </div>
          </div>

          {/* Right: Modules */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              Program <span className="text-neon-blue">Modules</span>
            </h3>
            
            <div className="space-y-6">
              {modules.map((module, index) => (
                <div 
                  key={index}
                  className="p-6 bg-card/40 backdrop-blur-sm border border-muted/20 rounded-xl hover:border-neon-blue/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-lg group-hover:from-neon-blue/20 group-hover:to-neon-purple/20 transition-all duration-300">
                      <module.icon className="w-6 h-6 text-neon-blue" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-foreground group-hover:text-neon-blue transition-colors duration-300">
                        Module {index + 1}: {module.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="text-center p-12 bg-gradient-to-r from-card/60 to-card/40 backdrop-blur-sm border border-neon-yellow/30 rounded-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-yellow via-neon-blue to-neon-purple"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Build Your AI Empire?
              </h3>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the next cohort of AI Agent Accelerator and transform your business 
                with the power of autonomous intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  variant="neon" 
                  size="lg" 
                  className="text-xl px-10 py-4 pulse-glow"
                >
                  Secure Your Spot
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
                
                <Button 
                  variant="neon-outline" 
                  size="lg" 
                  className="text-xl px-10 py-4"
                >
                  Download Curriculum
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                Limited to 20 participants per cohort • Next cohort starts March 1st
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureOfferSection;