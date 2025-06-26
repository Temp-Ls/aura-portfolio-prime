
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Dribbble", url: "#" },
  ];

  return (
    <footer className="bg-card/40 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Alex Morgan</h3>
            <p className="text-foreground/80 leading-relaxed">
              Full Stack Developer passionate about creating digital experiences 
              that make a difference. Always learning, always building.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-foreground/80 hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary">Connect</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-8 pt-8 text-center">
          <p className="text-foreground/60">
            © {currentYear} Alex Morgan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
