import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that combine aesthetic excellence with technical precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story Card */}
          <Card className="p-8 bg-glass border-border backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-foreground-muted leading-relaxed">
              <p>
                Started as a curious designer who fell in love with code. What began as 
                simple website tweaks evolved into a passion for full-stack development 
                and user experience design.
              </p>
              <p>
                Today, I specialize in React, Node.js, and TypeScript, with a keen eye 
                for design systems and performance optimization. I believe great software 
                is invisible to the user but powerful under the hood.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source, or mentoring aspiring developers.
              </p>
            </div>
          </Card>

          {/* Stats & Highlights */}
          <div className="space-y-6">
            <Card className="p-6 bg-glass border-border backdrop-blur-sm hover:shadow-accent transition-all duration-300">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-foreground-muted">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                  <div className="text-foreground-muted">Years Experience</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-glass border-border backdrop-blur-sm hover:shadow-accent transition-all duration-300">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Core Values</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                  Clean Code
                </Badge>
                <Badge variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/30">
                  User-Centric
                </Badge>
                <Badge variant="secondary" className="bg-accent/20 text-accent hover:bg-accent/30">
                  Performance
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                  Innovation
                </Badge>
              </div>
            </Card>

            <Card className="p-6 bg-glass border-border backdrop-blur-sm hover:shadow-accent transition-all duration-300">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Education</h4>
              <div className="space-y-2">
                <div>
                  <div className="font-medium text-foreground">Computer Science, B.S.</div>
                  <div className="text-sm text-foreground-muted">Stanford University • 2018</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;