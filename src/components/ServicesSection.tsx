import { Cpu, Workflow, GraduationCap, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Cpu,
      title: "AI Agent Workshops",
      description: "Hands-on training to build, deploy, and optimize custom AI agents for your specific business needs.",
      features: [
        "Custom agent architecture design",
        "Multi-modal AI integration",
        "Performance optimization techniques",
        "Real-world deployment strategies"
      ],
      color: "neon-yellow"
    },
    {
      icon: Workflow,
      title: "Business Automation Consulting",
      description: "Transform your operations with intelligent workflow automation that scales with your business growth.",
      features: [
        "Process analysis & mapping",
        "Intelligent automation design",
        "Integration with existing systems",
        "ROI measurement & optimization"
      ],
      color: "neon-blue"
    },
    {
      icon: GraduationCap,
      title: "AI Career Coaching",
      description: "Accelerate your professional growth using AI tools and strategies to stand out in the modern workplace.",
      features: [
        "AI-powered skill development",
        "Personal brand enhancement",
        "Strategic career positioning",
        "Network expansion techniques"
      ],
      color: "neon-purple"
    },
    {
      icon: Building2,
      title: "Corporate Training Programs",
      description: "Enterprise-level AI training programs that upskill entire teams and transform organizational capabilities.",
      features: [
        "Leadership AI strategy sessions",
        "Team capability assessments",
        "Customized learning pathways",
        "Change management support"
      ],
      color: "neon-green"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-card/30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            What I <span className="text-neon">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions that bridge the gap between cutting-edge technology 
            and practical business outcomes.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-yellow to-neon-blue mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-card/40 backdrop-blur-sm border border-muted/20 rounded-2xl hover:border-neon-yellow/30 transition-all duration-500 hover:transform hover:scale-[1.02] relative overflow-hidden"
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`p-4 bg-gradient-to-br from-${service.color}/10 to-${service.color}/5 rounded-xl w-fit mb-6 group-hover:from-${service.color}/20 group-hover:to-${service.color}/10 transition-all duration-300`}>
                  <service.icon className={`w-10 h-10 text-${service.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-neon-yellow transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-${service.color} rounded-full flex-shrink-0`}></div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant="neon-outline" 
                  size="sm" 
                  className="group-hover:scale-105 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="p-8 bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm border border-neon-yellow/20 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss how AI agents can revolutionize your operations and accelerate your growth.
            </p>
            <Button variant="neon" size="lg" className="pulse-glow">
              Schedule a Strategy Session
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;