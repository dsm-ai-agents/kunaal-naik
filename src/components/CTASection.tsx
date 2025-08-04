import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-yellow via-neon-blue to-neon-purple animate-pulse"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-yellow/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Let's Build the <span className="text-neon bg-gradient-to-r from-neon-yellow to-neon-blue bg-clip-text text-transparent">Future</span> Together
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Ready to transform your business with AI agents? Whether you're looking for training, 
            consulting, or just want to explore the possibilities, I'm here to help you succeed.
          </p>
        </div>

        {/* CTA Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Strategy Session */}
          <div className="p-8 bg-card/50 backdrop-blur-sm border border-neon-yellow/20 rounded-2xl hover:border-neon-yellow/40 transition-all duration-300 hover:transform hover:scale-105 group text-center">
            <div className="p-4 bg-gradient-to-br from-neon-yellow/10 to-neon-yellow/5 rounded-xl w-fit mx-auto mb-6 group-hover:from-neon-yellow/20 group-hover:to-neon-yellow/10 transition-all duration-300">
              <Calendar className="w-8 h-8 text-neon-yellow" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-yellow transition-colors duration-300">
              Strategy Session
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Book a 1-on-1 strategy session to discuss your AI transformation roadmap
            </p>
            <Button 
              variant="neon" 
              className="w-full group-hover:scale-105 transition-transform duration-300"
              onClick={() => window.open('https://tidycal.com/kunaalnaik/ai-agent', '_blank')}
            >
              Book Session
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Join Community */}
          <div className="p-8 bg-card/50 backdrop-blur-sm border border-neon-blue/20 rounded-2xl hover:border-neon-blue/40 transition-all duration-300 hover:transform hover:scale-105 group text-center">
            <div className="p-4 bg-gradient-to-br from-neon-blue/10 to-neon-blue/5 rounded-xl w-fit mx-auto mb-6 group-hover:from-neon-blue/20 group-hover:to-neon-blue/10 transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-neon-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-blue transition-colors duration-300">
              Join the Community
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Connect with 10,000+ AI professionals in Data Science Masterminds
            </p>
            <Button 
              variant="neon-blue" 
              className="w-full group-hover:scale-105 transition-transform duration-300"
              onClick={() => window.open('https://datasciencemasterminds.com/', '_blank')}
            >
              Join Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Newsletter */}
          <div className="p-8 bg-card/50 backdrop-blur-sm border border-neon-purple/20 rounded-2xl hover:border-neon-purple/40 transition-all duration-300 hover:transform hover:scale-105 group text-center md:col-span-2 lg:col-span-1">
            <div className="p-4 bg-gradient-to-br from-neon-purple/10 to-neon-purple/5 rounded-xl w-fit mx-auto mb-6 group-hover:from-neon-purple/20 group-hover:to-neon-purple/10 transition-all duration-300">
              <Mail className="w-8 h-8 text-neon-purple" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-purple transition-colors duration-300">
              Weekly Newsletter
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Get weekly agentic workflows and growth hacks delivered to your inbox
            </p>
            <Button variant="outline" className="w-full group-hover:scale-105 transition-transform duration-300 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center">
          <div className="p-12 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm border-2 border-neon-yellow/30 rounded-3xl relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-yellow/5 via-neon-blue/5 to-neon-purple/5"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                The AI Revolution <span className="text-neon">Starts Now</span>
              </h3>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Don't get left behind. The companies and professionals who embrace AI agents today 
                will be the leaders of tomorrow. Your agentic journey begins with a single step.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  variant="neon" 
                  size="lg" 
                  className="text-xl px-12 py-4 pulse-glow font-bold"
                  onClick={() => window.open('https://tidycal.com/kunaalnaik/ai-agent', '_blank')}
                >
                  Start Your Transformation
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Free 15-minute consultation • No commitment required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;