import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Download, MapPin, Mail, Phone, Calendar, Award, Briefcase, GraduationCap } from "lucide-react";
import Modal from "./Modal";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2021 - Present",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response time by 60% through optimization strategies",
        "Mentored 8 junior developers and established code review processes",
        "Architected CI/CD pipeline reducing deployment time from hours to minutes"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "InnovateLab",
      location: "San Francisco, CA", 
      duration: "2019 - 2021",
      achievements: [
        "Built responsive web applications using React and Node.js",
        "Implemented real-time features with WebSocket and Socket.io",
        "Collaborated with design team to create pixel-perfect UI components",
        "Increased application performance by 40% through code optimization"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      duration: "2018 - 2019", 
      achievements: [
        "Developed mobile-first responsive websites for 20+ clients",
        "Created reusable component library adopted across 5 projects",
        "Improved user engagement by 35% through UX improvements",
        "Maintained 98% client satisfaction rate"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      duration: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude (GPA: 3.8/4.0)",
        "Dean's List for 6 consecutive semesters",
        "Computer Science Society Vice President",
        "Winner of Annual Hackathon 2017"
      ]
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Sass"],
    "Backend": ["Node.js", "Python", "Express", "FastAPI", "GraphQL", "REST APIs"],
    "Database": ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring"],
    "Tools & Others": ["Git", "Figma", "Jest", "Cypress", "Agile", "Linux"]
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" title="Resume">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 border-b border-border pb-8">
          <h1 className="text-3xl font-bold text-foreground">Alex Johnson</h1>
          <p className="text-xl text-primary">Full Stack Developer & UI/UX Designer</p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground-muted">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              alex@example.com
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              +1 (555) 123-4567
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              San Francisco, CA
            </div>
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Professional Summary */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <Award className="h-6 w-6 mr-3 text-primary" />
            Professional Summary
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            Innovative Full Stack Developer with 5+ years of experience designing and implementing 
            scalable web applications. Proven track record of leading cross-functional teams, 
            optimizing system performance, and delivering high-quality solutions that drive business growth. 
            Passionate about creating user-centric experiences through clean code and modern technologies.
          </p>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Technical Skills</h2>
          <div className="space-y-4">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="space-y-2">
                <h3 className="text-lg font-medium text-foreground">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <Briefcase className="h-6 w-6 mr-3 text-primary" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="p-6 bg-glass border-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                    <div className="flex items-center text-foreground-muted text-sm mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {job.location}
                    </div>
                  </div>
                  <div className="flex items-center text-foreground-muted mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    {job.duration}
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-foreground-muted">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <GraduationCap className="h-6 w-6 mr-3 text-primary" />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 bg-glass border-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.school}</p>
                    <div className="flex items-center text-foreground-muted text-sm mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {edu.location}
                    </div>
                  </div>
                  <div className="flex items-center text-foreground-muted mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    {edu.duration}
                  </div>
                </div>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-foreground-muted">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center pt-8 border-t border-border">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Download className="mr-2 h-5 w-5" />
            Download Full Resume (PDF)
          </Button>
          <p className="text-sm text-foreground-muted mt-2">
            Last updated: December 2024
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ResumeModal;