import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, Award } from "lucide-react";
import Modal from "./Modal";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    category: string;
    duration: string;
    team: string;
    role: string;
    challenges: string[];
    solutions: string[];
    results: string[];
    links: {
      live: string;
      github: string;
      case: string;
    };
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <div className="space-y-8">
        {/* Project Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="bg-primary/20 text-primary">
            {project.category}
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto">
            {project.longDescription}
          </p>
        </div>

        {/* Project Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center text-foreground-muted">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="font-medium">Duration</span>
            </div>
            <p className="text-foreground">{project.duration}</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center text-foreground-muted">
              <Users className="h-4 w-4 mr-2" />
              <span className="font-medium">Team Size</span>
            </div>
            <p className="text-foreground">{project.team}</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center text-foreground-muted">
              <Award className="h-4 w-4 mr-2" />
              <span className="font-medium">My Role</span>
            </div>
            <p className="text-foreground">{project.role}</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Technologies Used</h3>
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
        </div>

        {/* Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Challenges</h3>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-foreground-muted">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Solutions</h3>
            <ul className="space-y-3">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-foreground-muted">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Results & Impact</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {project.results.map((result, index) => (
              <div 
                key={index}
                className="p-4 bg-glass border border-border rounded-lg hover:border-primary/30 transition-colors duration-300"
              >
                <p className="text-foreground-muted">{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center pt-6 border-t border-border">
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href={project.links.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Live Project
            </a>
          </Button>
          
          <Button variant="outline" asChild>
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Source Code
            </a>
          </Button>
          
          <Button variant="ghost" asChild>
            <a href={project.links.case} target="_blank" rel="noopener noreferrer">
              Read Full Case Study
            </a>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;