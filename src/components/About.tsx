
const About = () => {
  return (
    <section id="about" className="section-padding bg-card/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that make a difference. My journey began with 
                a curiosity for how things work, which led me to explore the intersection 
                of design and technology.
              </p>
              <p>
                I specialize in building modern web applications using cutting-edge 
                technologies like React, Node.js, and cloud platforms. My approach 
                combines technical expertise with creative problem-solving to deliver 
                solutions that are both beautiful and functional.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with the 
                developer community through blog posts and speaking engagements.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6 text-primary">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-foreground/80">Location</span>
                  <span className="font-medium">San Francisco, CA</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-foreground/80">Experience</span>
                  <span className="font-medium">5+ Years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-foreground/80">Projects Completed</span>
                  <span className="font-medium">50+</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground/80">Availability</span>
                  <span className="font-medium text-green-400">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
