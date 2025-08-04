import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background"></div>
      
      {/* Ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            See the <span className="text-neon">Vision</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch Kunaal explain the transformative power of AI agents and the future of autonomous business operations
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-16">
          <div className="relative group">
            {/* Video placeholder with play button */}
            <div className="relative aspect-video bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-neon-yellow/20 rounded-2xl overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-yellow/5"></div>
              
              {/* Video thumbnail overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* Play button */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-neon-yellow to-neon-blue rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 pulse-glow group-hover:shadow-[0_0_40px_rgba(255,255,0,0.6)]">
                      <Play className="w-10 h-10 text-black ml-1" fill="currentColor" />
                    </div>
                    
                    {/* Pulse rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-neon-yellow/30 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full border border-neon-yellow/20 animate-ping animation-delay-300"></div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    "The Rise of AI Agents: Why Every Business Needs Them"
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    TEDx Talk • 18 minutes • 250K+ views
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <span className="px-3 py-1 bg-neon-yellow/10 border border-neon-yellow/20 rounded-full text-sm text-neon-yellow">
                      AI Strategy
                    </span>
                    <span className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded-full text-sm text-neon-blue">
                      Future of Work
                    </span>
                    <span className="px-3 py-1 bg-neon-purple/10 border border-neon-purple/20 rounded-full text-sm text-neon-purple">
                      Business Transformation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Building Your First AI Agent",
              platform: "YouTube",
              duration: "45 min",
              views: "125K",
              type: "Tutorial"
            },
            {
              title: "AI Agents vs Traditional Automation",
              platform: "LinkedIn Live",
              duration: "30 min",
              views: "85K",
              type: "Deep Dive"
            },
            {
              title: "Case Study: 10x ROI with AI Agents",
              platform: "Webinar",
              duration: "60 min",
              views: "200K",
              type: "Case Study"
            }
          ].map((video, index) => (
            <div 
              key={index}
              className="p-6 bg-card/40 backdrop-blur-sm border border-muted/20 rounded-xl hover:border-neon-blue/30 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
            >
              <div className="relative aspect-video bg-gradient-to-br from-muted/20 to-muted/10 rounded-lg mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                  </div>
                </div>
                
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs text-white">
                  {video.duration}
                </div>
              </div>
              
              <h4 className="font-semibold mb-2 text-foreground group-hover:text-neon-blue transition-colors duration-300">
                {video.title}
              </h4>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{video.platform} • {video.views} views</span>
                <span className="px-2 py-1 bg-neon-blue/10 text-neon-blue rounded text-xs">
                  {video.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="p-8 bg-gradient-to-r from-card/60 to-card/40 backdrop-blur-sm border border-neon-yellow/20 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Want More Insights?
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to my YouTube channel for weekly deep-dives into AI agents, automation strategies, and future-of-work insights.
            </p>
            <Button variant="neon-blue" size="lg">
              Subscribe Now
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;