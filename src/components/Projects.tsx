import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI/ML Capstone Project",
      description: "Live capstone project combining 240 hours of domain training with hands-on AI/ML implementation. Developed intelligent solutions using machine learning algorithms and data analytics.",
      tech: ["Python", "Machine Learning", "Data Analytics", "AI"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Cloud Security Implementation",
      description: "Comprehensive cloud technology and information security project focusing on server administration and data protection protocols.",
      tech: ["Cloud Technology", "Security", "Server Admin", "AWS"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Data Clustering Analysis",
      description: "Advanced data science project implementing k-means clustering and bagging classifiers for pattern recognition and predictive analytics.",
      tech: ["Python", "K-means", "Bagging Classifier", "Data Scaling"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="glass-card hover-lift group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 gradient-text">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="hero" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="glass" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};