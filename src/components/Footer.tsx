import { Zap, Linkedin, Youtube, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/kunaal-naik/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/KunaalNaik", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const footerLinks = [
    {
      title: "Services",
      links: [
        "AI Agent Workshops",
        "Business Automation",
        "Career Coaching",
        "Corporate Training"
      ]
    },
    {
      title: "Programs",
      links: [
        "AI Agent Accelerator",
        "Data Science Masterminds",
        "One-on-One Coaching",
        "Strategy Sessions"
      ]
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "YouTube Channel",
        "Case Studies",
        "Free Tools"
      ]
    }
  ];

  return (
    <footer className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-yellow via-neon-blue to-neon-purple"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-neon-yellow to-neon-blue rounded-xl">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-foreground">Kunaal</span>
                <span className="text-neon"> Naik</span>
              </span>
            </div>
            
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-md">
              AI, Data & Tech Strategist helping businesses and professionals unlock 
              10x growth through AI agents and workflow automation.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-card/50 backdrop-blur-sm border border-muted/20 rounded-lg hover:border-neon-yellow/30 transition-all duration-300 hover:transform hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-neon-yellow transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6 text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-neon-blue transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="p-8 bg-gradient-to-r from-card/60 to-card/40 backdrop-blur-sm border border-neon-yellow/20 rounded-2xl mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Ahead of the AI Curve
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get weekly insights on AI agents, automation strategies, and the future of work 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-input border border-muted/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-yellow text-foreground"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-neon-yellow to-neon-blue text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-muted/20">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Kunaal Naik. All rights reserved. Powered by AI.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-neon-yellow transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-yellow transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-yellow transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;