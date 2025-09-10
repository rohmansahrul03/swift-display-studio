import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Alex Johnson
          </h1>
          <p className="text-xl md:text-2xl text-foreground-muted mb-4 animate-slide-up">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-foreground-subtle max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Crafting digital experiences that bridge the gap between innovative design and 
            powerful functionality. Passionate about creating solutions that make a difference.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-glass text-foreground hover:text-foreground transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
          >
            <Download className="mr-2 h-5 w-5" />
            Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#" 
            className="p-3 rounded-full bg-glass border border-border hover:border-primary/50 hover:shadow-accent transition-all duration-300 group backdrop-blur-sm"
          >
            <Github className="h-6 w-6 text-foreground-muted group-hover:text-primary transition-colors duration-300" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full bg-glass border border-border hover:border-primary/50 hover:shadow-accent transition-all duration-300 group backdrop-blur-sm"
          >
            <Linkedin className="h-6 w-6 text-foreground-muted group-hover:text-primary transition-colors duration-300" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full bg-glass border border-border hover:border-primary/50 hover:shadow-accent transition-all duration-300 group backdrop-blur-sm"
          >
            <Mail className="h-6 w-6 text-foreground-muted group-hover:text-primary transition-colors duration-300" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <ChevronDown className="h-8 w-8 text-foreground-subtle mx-auto animate-bounce cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;