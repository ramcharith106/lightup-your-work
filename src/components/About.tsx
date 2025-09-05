import { Card } from "@/components/ui/card";

export const About = () => {
  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Python", level: 75 },
    { name: "GraphQL", level: 70 }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <Card className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
              <p className="text-lg leading-relaxed mb-4">
                With over 5 years of experience in web development and design, 
                I specialize in creating modern, responsive applications that 
                deliver exceptional user experiences.
              </p>
              <p className="text-lg leading-relaxed">
                I'm passionate about clean code, innovative solutions, and 
                staying at the forefront of technology trends. When I'm not 
                coding, you'll find me exploring new design concepts or 
                contributing to open-source projects.
              </p>
            </Card>
          </div>
          
          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};