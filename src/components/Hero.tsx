import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 lg:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Automação e IA para empresas" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85 lg:bg-background/80"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight animate-fade-in">
            sua empresa pronta para o{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              futuro
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up px-4">
            Automação inteligente e IA para o crescimento que você sempre quis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-scale-in px-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4">
              Fale com um especialista
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4">
              Ver Preços
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-4 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};

export default Hero;