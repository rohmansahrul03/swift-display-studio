import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Palette, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe,
  Zap,
  Users
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand"],
      color: "primary"
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "secondary"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring"],
      color: "accent"
    },
    {
      title: "Design & UX",
      icon: Palette,
      skills: ["Figma", "Adobe Creative", "Prototyping", "Design Systems", "User Research"],
      color: "primary"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android", "App Store Deploy"],
      color: "secondary"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Team Leadership", "Mentoring", "Agile", "Communication", "Problem Solving"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through years of hands-on experience 
            and continuous learning in the ever-evolving tech landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-glass border-border backdrop-blur-sm hover:shadow-lg transition-all duration-500 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-${category.color}/20 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`h-6 w-6 text-${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary" 
                    className={`bg-${category.color}/10 text-${category.color} hover:bg-${category.color}/20 border-${category.color}/20 transition-colors duration-300`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Skill Level Indicator */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm text-foreground-muted mb-2">
                  <span>Proficiency</span>
                  <span>Advanced</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r from-${category.color} to-${category.color}/70 h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                    style={{ width: '85%' }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Globe, label: "Languages", value: "5+" },
            { icon: Code2, label: "Frameworks", value: "15+" },
            { icon: Zap, label: "Tools", value: "25+" },
            { icon: Database, label: "Databases", value: "8+" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-glass border border-border rounded-2xl mb-4 group-hover:border-primary/50 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-foreground-muted group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-foreground-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;