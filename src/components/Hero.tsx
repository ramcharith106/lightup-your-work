import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-accent rounded-full opacity-30 floating-animation"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-secondary rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-primary rounded-full opacity-25 floating-animation delay-500"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="floating-animation">
          <h1 className="text-7xl md:text-9xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse">
              Hello, I'm
            </span>
            <br />
            <span className="text-foreground drop-shadow-lg">
              Sangeet Gautam
            </span>
          </h1>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-float border border-white/30">
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            🚀 AI Engineer | 📊 Data Scientist | 🎯 Leadership Trainee
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Crafting intelligent solutions that unlock new dimensions of potential with AI & Machine Learning 
            in the most vibrant and innovative ways! ✨
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-xl px-12 py-6 font-bold shadow-glow hover:shadow-float">
            🎨 View My Work
          </Button>
          <Button variant="glass" size="lg" className="text-xl px-12 py-6 font-bold">
            💌 Get In Touch
          </Button>
        </div>
        
        {/* Bright Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-3 border-primary rounded-full flex justify-center bg-white/20 backdrop-blur-sm shadow-glow">
            <div className="w-2 h-4 bg-primary rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};