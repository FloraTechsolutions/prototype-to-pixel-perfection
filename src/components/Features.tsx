import { Card } from "@/components/ui/card";
import { Settings, Brain, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Settings,
      title: "Otimização Inteligente",
      description: "Automatize processos tediosos e aumente a produtividade da sua equipe com IA avançada."
    },
    {
      icon: Brain,
      title: "Decisões Estratégicas", 
      description: "Utilize a IA para ter insights valiosos e tomar decisões mais acertadas baseadas em dados."
    },
    {
      icon: TrendingUp,
      title: "Resultados Mensuráveis",
      description: "Nossas soluções geram um retorno real e mensurável sobre o seu investimento."
    }
  ];

  return (
    <section id="beneficios" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Por que nos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              escolher?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto px-4">
            Oferecemos soluções completas que transformam a forma como sua empresa opera
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 sm:p-8 lg:p-10 text-center hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg animate-slide-up hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;