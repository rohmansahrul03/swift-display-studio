import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  Github,
  Linkedin,
  Twitter,
  Calendar
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'm always open to discussing new opportunities 
            and interesting challenges. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8 bg-glass border-border backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground-muted mb-2">
                    Name *
                  </label>
                  <Input 
                    placeholder="Your full name"
                    className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground-muted mb-2">
                    Email *
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">
                  Subject *
                </label>
                <Input 
                  placeholder="What's this about?"
                  className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">
                  Message *
                </label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-background/50 border-border focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="p-6 bg-glass border-border backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <div className="text-foreground font-medium">Email</div>
                    <div className="text-foreground-muted">alex@example.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <div className="text-foreground font-medium">Phone</div>
                    <div className="text-foreground-muted">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <div className="text-foreground font-medium">Location</div>
                    <div className="text-foreground-muted">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 bg-glass border-border backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Social Media</h3>
              
              <div className="space-y-3">
                {[
                  { icon: Github, label: "GitHub", handle: "@alexjohnson", link: "#" },
                  { icon: Linkedin, label: "LinkedIn", handle: "in/alexjohnson", link: "#" },
                  { icon: Twitter, label: "Twitter", handle: "@alexjohnsondev", link: "#" }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.link}
                    className="flex items-center p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <social.icon className="h-5 w-5 text-foreground-muted group-hover:text-primary mr-3 transition-colors duration-300" />
                    <div>
                      <div className="text-foreground font-medium">{social.label}</div>
                      <div className="text-foreground-muted text-sm">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 bg-glass border-border backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Availability</h3>
              
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-primary mr-3" />
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  Available for new projects
                </Badge>
              </div>
              
              <p className="text-foreground-muted text-sm leading-relaxed">
                Currently accepting new freelance projects and consulting opportunities. 
                Typical response time: within 24 hours.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;