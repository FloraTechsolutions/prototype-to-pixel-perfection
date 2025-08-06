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
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que nos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              escolher?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas que transformam a forma como sua empresa opera
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
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