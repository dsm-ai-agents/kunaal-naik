import { Star, Quote, Users, Award } from "lucide-react";

const SocialProofSection = () => {
  const companies = [
    { name: "Dell", logo: "🖥️" },
    { name: "IIM Bangalore", logo: "🎓" },
    { name: "IIM Calcutta", logo: "🎓" },
    { name: "Accenture", logo: "💼" },
    { name: "TCS", logo: "🌐" },
    { name: "Wipro", logo: "🔧" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Marketing Director",
      company: "TechCorp",
      content: "Kunaal's AI agent training transformed our entire marketing operation. We now have autonomous systems handling lead qualification, content creation, and customer segmentation. Our conversion rates increased by 340% in just 8 weeks.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Rodriguez",
      title: "VP of Operations",
      company: "GrowthLabs",
      content: "The AI Agent Accelerator program is a game-changer. Kunaal didn't just teach us theory - we built actual agents that now save our team 30+ hours per week. The ROI was immediate and continues to compound.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Priya Sharma",
      title: "Data Scientist",
      company: "FinanceAI",
      content: "I thought I knew AI until I met Kunaal. His approach to agentic workflows opened up possibilities I never imagined. My career trajectory completely changed - I'm now leading AI initiatives across our entire organization.",
      rating: 5,
      avatar: "👩‍💻"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Community Members",
      color: "neon-yellow"
    },
    {
      icon: Award,
      number: "500+",
      label: "Professionals Trained",
      color: "neon-blue"
    },
    {
      icon: Star,
      number: "98%",
      label: "Success Rate",
      color: "neon-purple"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Trusted by <span className="text-neon">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Organizations and professionals worldwide trust Kunaal to guide their AI transformation
          </p>
        </div>

        {/* Company logos */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12 text-muted-foreground">
            Companies I've Trained
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-card/30 backdrop-blur-sm border border-muted/20 rounded-xl hover:border-neon-yellow/30 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {company.logo}
                </div>
                <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-card/40 backdrop-blur-sm border border-muted/20 rounded-2xl hover:border-neon-yellow/30 transition-all duration-300 group"
            >
              <div className={`p-4 bg-gradient-to-br from-${stat.color}/10 to-${stat.color}/5 rounded-xl w-fit mx-auto mb-6 group-hover:from-${stat.color}/20 group-hover:to-${stat.color}/10 transition-all duration-300`}>
                <stat.icon className={`w-8 h-8 text-${stat.color}`} />
              </div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 text-${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            What People Are <span className="text-neon-blue">Saying</span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border border-muted/20 rounded-2xl hover:border-neon-blue/30 transition-all duration-300 hover:transform hover:scale-[1.02] relative group"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Quote className="w-8 h-8 text-neon-blue" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-neon-yellow fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-foreground/90 mb-8 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-3xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;