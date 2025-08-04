import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ai-circuit.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with grid pattern */}
      <div className="absolute inset-0 bg-background grid-bg"></div>
      
      {/* Hero image background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI Circuit Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-yellow rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-blue rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-neon-purple rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-neon-green rounded-full animate-pulse delay-3000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Icon animations */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="p-4 bg-card/50 backdrop-blur-sm rounded-full border border-neon-yellow/30 float">
            <Sparkles className="w-8 h-8 text-neon-yellow" />
          </div>
          <div className="p-4 bg-card/50 backdrop-blur-sm rounded-full border border-neon-blue/30 float" style={{ animationDelay: "2s" }}>
            <Zap className="w-8 h-8 text-neon-blue" />
          </div>
        </div>

        {/* Name and title */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-foreground">Kunaal</span>{" "}
            <span className="text-neon bg-gradient-to-r from-neon-yellow to-neon-blue bg-clip-text text-transparent">
              Naik
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            AI, Data & Tech Strategist
          </p>
        </div>

        {/* Main tagline */}
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          <span className="text-neon-blue">Build AI Agents.</span><br />
          <span className="text-neon-yellow">Automate Everything.</span><br />
          <span className="text-neon-purple">Lead the Future.</span>
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto mb-12 leading-relaxed">
          I help businesses and professionals unlock{" "}
          <span className="text-neon font-semibold">10x growth</span> using{" "}
          <span className="text-neon-blue font-semibold">AI agents</span> &{" "}
          <span className="text-neon-purple font-semibold">workflow automation</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="neon" 
            size="lg" 
            className="text-lg px-8 py-4 pulse-glow"
          >
            Start Your Agentic Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            variant="neon-outline" 
            size="lg" 
            className="text-lg px-8 py-4"
          >
            Watch My TEDx Talk
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neon-yellow">15+</div>
            <div className="text-muted-foreground">Years in Data Science</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neon-blue">500+</div>
            <div className="text-muted-foreground">Professionals Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neon-purple">50+</div>
            <div className="text-muted-foreground">AI Agents Deployed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;