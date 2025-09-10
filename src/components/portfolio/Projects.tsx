import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EcoCommerce Platform",
      description: "A sustainable e-commerce platform helping users discover eco-friendly products with AI-powered recommendations and carbon footprint tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
      category: "Full Stack",
      featured: true,
      links: {
        live: "#",
        github: "#",
        case: "#"
      }
    },
    {
      title: "TaskFlow Mobile App",
      description: "Cross-platform productivity app with real-time collaboration, offline sync, and intuitive gesture-based interactions.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
      category: "Mobile",
      featured: true,
      links: {
        live: "#",
        github: "#",
        case: "#"
      }
    },
    {
      title: "DesignSystem Pro",
      description: "Comprehensive design system and component library used by 50+ companies, featuring automated documentation and theming.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      technologies: ["React", "Storybook", "TypeScript", "Figma API"],
      category: "Design System",
      featured: false,
      links: {
        live: "#",
        github: "#",
        case: "#"
      }
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time analytics platform with machine learning insights, custom visualizations, and predictive modeling capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "TensorFlow", "D3.js"],
      category: "Data Visualization",
      featured: false,
      links: {
        live: "#",
        github: "#",
        case: "#"
      }
    },
    {
      title: "Social Impact Network",
      description: "Platform connecting volunteers with local nonprofits, featuring geolocation matching and impact tracking.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Supabase", "MapBox", "Tailwind"],
      category: "Social Good",
      featured: false,
      links: {
        live: "#",
        github: "#",
        case: "#"
      }
    },
    {
      title: "DevTools Extension",
      description: "Browser extension for developers with performance monitoring, API testing, and debugging tools. 100K+ active users.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "WebExtensions", "Chrome APIs"],
      category: "Browser Extension",
      featured: false,
      links: {
        live: "#",
        github: "#",
        case: "#"
      }
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            A selection of projects that showcase my expertise in creating 
            impactful digital solutions from concept to deployment.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden bg-glass border-border backdrop-blur-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Project Details */}
                <div className="p-8 space-y-6">
                  <div>
                    <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
                      {project.category}
                    </Badge>
                    <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline" 
                        className="border-border hover:border-primary/50 hover:text-primary transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <a href={project.links.live}>
                        <Eye className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={project.links.github}>
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button variant="ghost" asChild>
                      <a href={project.links.case}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Case Study
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="overflow-hidden bg-glass border-border backdrop-blur-sm hover:shadow-lg transition-all duration-500 group hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-primary/90 text-primary-foreground"
                  >
                    {project.category}
                  </Badge>
                </div>

                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-foreground-muted leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline" 
                        className="text-xs border-border hover:border-primary/50 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.links.live}>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.links.github}>
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
