import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={scrollToTop}
        className={`
          relative p-3 rounded-full bg-glass border border-border backdrop-blur-sm
          hover:border-primary/50 hover:shadow-glow transition-all duration-300
          ${isVisible 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
          }
        `}
        size="sm"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity duration-300" />
        
        {/* Icon with animation */}
        <ChevronUp className="h-6 w-6 text-foreground-muted group-hover:text-primary transition-all duration-300 relative z-10" />
        
        {/* Pulse effect on hover */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-0 animate-pulse opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-500" />
      </Button>
    </div>
  );
};

export default BackToTop;