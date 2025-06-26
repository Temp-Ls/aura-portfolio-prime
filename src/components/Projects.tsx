
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution built with React, Node.js, and MongoDB. Features include real-time inventory management, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      link: "#",
    },
    {
      title: "AI-Powered Analytics",
      description: "Machine learning dashboard that provides intelligent insights and predictive analytics for business data visualization.",
      tech: ["Python", "React", "TensorFlow", "AWS"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, featuring innovative solutions and 
            cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary/30 hover:bg-primary/10"
                >
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
