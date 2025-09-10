import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Info } from "lucide-react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "EcoCommerce Platform",
      description: "A sustainable e-commerce platform helping users discover eco-friendly products with AI-powered recommendations and carbon footprint tracking.",
      longDescription: "EcoCommerce is a comprehensive e-commerce platform designed to promote sustainable shopping habits. The platform features AI-powered product recommendations based on environmental impact, carbon footprint tracking for purchases, and a rewards system for eco-friendly choices.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe", "TensorFlow", "Redis"],
      category: "Full Stack",
      duration: "8 months",
      team: "5 developers",
      role: "Lead Full Stack Developer",
      challenges: [
        "Complex AI recommendation algorithm requiring real-time processing",
        "Integrating carbon footprint calculation across diverse product categories",
        "Scaling database for millions of products with sustainability metrics",
        "Building real-time inventory management with supplier APIs"
      ],
      solutions: [
        "Implemented microservices architecture with Redis caching for sub-second responses",
        "Created standardized carbon calculation API using scientific databases",
        "Used PostgreSQL with optimized indexing and query optimization",
        "Built event-driven inventory system with webhook integrations"
      ],
      results: [
        "40% increase in user engagement with personalized eco recommendations",
        "Reduced average carbon footprint per order by 25%",
        "Processed over 100K transactions in first 6 months",
        "Achieved 99.9% uptime with auto-scaling infrastructure"
      ],
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
      longDescription: "TaskFlow revolutionizes team productivity with seamless cross-platform collaboration. The app features real-time synchronization, intelligent task prioritization, and an intuitive gesture-based interface that adapts to user behavior patterns.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React Native", "TypeScript", "Firebase", "Redux", "Socket.io", "SQLite"],
      category: "Mobile",
      duration: "6 months",
      team: "4 developers",
      role: "Mobile Lead Developer",
      challenges: [
        "Implementing reliable offline-first architecture",
        "Designing intuitive gesture controls for complex workflows",
        "Ensuring real-time sync across multiple devices without conflicts",
        "Optimizing performance for older mobile devices"
      ],
      solutions: [
        "Built robust local-first database with conflict resolution algorithms",
        "Created custom gesture recognition system with haptic feedback",
        "Implemented operational transformation for real-time collaboration",
        "Used performance profiling and lazy loading for smooth experience"
      ],
      results: [
        "50K+ downloads within 3 months of launch",
        "4.8/5 star rating on both App Store and Play Store",
        "35% improvement in team productivity metrics",
        "Offline functionality works seamlessly with 99% sync success rate"
      ],
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
      longDescription: "DesignSystem Pro is a comprehensive component library and design system that enables teams to build consistent, accessible applications at scale. Features automated documentation generation, theme customization, and seamless integration across multiple frameworks.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      technologies: ["React", "Storybook", "TypeScript", "Figma API", "Rollup", "CSS-in-JS"],
      category: "Design System",
      duration: "10 months",
      team: "3 developers + 2 designers",
      role: "Lead Frontend Architect",
      challenges: [
        "Creating components that work across React, Vue, and Angular",
        "Maintaining design consistency across 50+ client implementations",
        "Automated testing for visual regression across components",
        "Building flexible theming system for diverse brand requirements"
      ],
      solutions: [
        "Built framework-agnostic core with framework-specific wrappers",
        "Implemented design tokens with automated Figma sync",
        "Created comprehensive visual testing pipeline with Chromatic",
        "Developed CSS custom properties based theming architecture"
      ],
      results: [
        "Adopted by 50+ companies within 18 months",
        "Reduced development time by 40% for client teams",
        "99.2% accessibility compliance across all components",
        "Generated $2M+ in licensing revenue for the company"
      ],
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
      longDescription: "AI Analytics Dashboard transforms complex data into actionable insights using machine learning algorithms. Features real-time data processing, custom visualization builder, and predictive analytics that help businesses make data-driven decisions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "TensorFlow", "D3.js", "FastAPI", "WebSockets"],
      category: "Data Visualization",
      duration: "7 months",
      team: "6 developers + 1 data scientist",
      role: "Frontend Lead & Data Visualization Specialist",
      challenges: [
        "Processing and visualizing millions of data points in real-time",
        "Creating intuitive interfaces for complex ML model outputs",
        "Building flexible dashboard builder for non-technical users",
        "Ensuring data security and compliance with enterprise standards"
      ],
      solutions: [
        "Implemented data streaming with WebSockets and efficient caching",
        "Created abstraction layer to simplify ML predictions presentation",
        "Built drag-and-drop dashboard builder with pre-configured widgets",
        "Implemented role-based access control and data encryption"
      ],
      results: [
        "Processes 10M+ data points daily with <2s latency",
        "Increased decision-making speed by 60% for client teams",
        "Achieved 99.99% uptime with auto-scaling infrastructure",
        "Reduced data analysis time from hours to minutes"
      ],
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
      longDescription: "Social Impact Network bridges the gap between passionate volunteers and meaningful causes. Using advanced geolocation algorithms and impact measurement tools, the platform creates lasting connections that drive positive community change.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Supabase", "MapBox", "Tailwind", "Stripe", "SendGrid"],
      category: "Social Good",
      duration: "5 months",
      team: "4 developers + 2 designers",
      role: "Full Stack Developer",
      challenges: [
        "Accurate geolocation matching for volunteer-nonprofit pairing",
        "Building trust and safety features for community platform",
        "Creating meaningful impact metrics and tracking systems",
        "Scaling platform to handle diverse nonprofit requirements"
      ],
      solutions: [
        "Implemented intelligent matching algorithm with MapBox integration",
        "Built comprehensive verification and review system",
        "Created standardized impact measurement framework",
        "Developed flexible organization onboarding and management system"
      ],
      results: [
        "Connected 10K+ volunteers with 500+ nonprofits",
        "Facilitated 50K+ volunteer hours in first year",
        "Achieved 4.9/5 platform satisfaction rating",
        "Expanded to 25 cities across North America"
      ],
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
      longDescription: "DevTools Extension revolutionizes web development workflow with comprehensive debugging and performance tools. Features real-time API monitoring, performance analysis, and automated testing capabilities that integrate seamlessly into developer workflows.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "WebExtensions", "Chrome APIs", "React", "IndexedDB"],
      category: "Browser Extension",
      duration: "8 months",
      team: "2 developers",
      role: "Lead Developer & Product Manager",
      challenges: [
        "Working within strict browser extension security limitations",
        "Creating intuitive UI within limited browser extension space",
        "Ensuring performance tools don't impact page performance",
        "Supporting multiple browsers with different APIs"
      ],
      solutions: [
        "Optimized extension architecture for minimal resource usage",
        "Designed collapsible, context-aware interface components",
        "Implemented non-invasive background monitoring techniques",
        "Built unified API abstraction layer for cross-browser support"
      ],
      results: [
        "100K+ active users across Chrome and Firefox",
        "4.8/5 rating with 50K+ reviews on Chrome Web Store",
        "Featured in 'Developer Tools of the Year' by Dev.to",
        "Reduced debugging time by 45% according to user surveys"
      ],
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
                    <Button 
                      variant="ghost" 
                      onClick={() => openProjectModal(project)}
                    >
                      <Info className="mr-2 h-4 w-4" />
                      View Details
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
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => openProjectModal(project)}
                    >
                      <Info className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        <ProjectModal 
          isOpen={isModalOpen}
          onClose={closeProjectModal}
          project={selectedProject}
        />
      </div>
    </section>
  );
};

export default Projects;
