import { Globe, Twitter, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "Features", href: "#features" },
        { label: "Community", href: "#community" },
        { label: "Sessions", href: "#sessions" },
        { label: "Pricing", href: "#pricing" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "API", href: "#" },
        { label: "Blog", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Contact", href: "#" }
      ]
    }
  ];

  return (
    <footer className="py-16 border-t border-white/10 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-text">Global Connect</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Connecting minds worldwide through collaborative learning, creative sessions, 
              and meaningful social interactions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="text-muted-foreground mb-4 md:mb-0">
            © 2024 Global Connect. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};