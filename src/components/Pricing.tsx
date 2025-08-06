import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Star, Rocket } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "3.800",
      period: "/projeto",
      description: "Ideal para pequenas empresas que querem começar a automatizar",
      features: [
        "Análise de processos básica",
        "1 automação simples", 
        "Relatório de resultados",
        "Suporte por 30 dias",
        "Treinamento básico da equipe"
      ],
      popular: false,
      buttonText: "Começar Agora"
    },
    {
      name: "Professional",
      icon: Star,
      price: "5.500", 
      period: "/projeto",
      description: "Para empresas que buscam otimização completa de processos",
      features: [
        "Análise completa de processos",
        "Até 3 automações integradas",
        "Dashboard personalizado",
        "Suporte por 90 dias",
        "Treinamento avançado",
        "Integração com sistemas existentes",
        "Relatórios detalhados"
      ],
      popular: true,
      buttonText: "Começar Agora"
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: "12.000",
      period: "/projeto", 
      description: "Solução completa para grandes empresas e transformação digital",
      features: [
        "Análise estratégica completa",
        "Automações ilimitadas",
        "IA personalizada",
        "Suporte prioritário 24/7",
        "Consultoria estratégica",
        "Implementação dedicada",
        "Monitoramento contínuo",
        "ROI garantido"
      ],
      popular: false,
      buttonText: "Começar Agora"
    }
  ];

  return (
    <section id="precos" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Projetos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Iniciais
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto px-4">
            Escolha o plano ideal para começar sua transformação digital
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-6 sm:p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 animate-slide-up ${
                plan.popular 
                  ? 'border-2 border-primary shadow-xl lg:scale-105' 
                  : 'border border-border shadow-lg'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground animate-pulse">
                  Mais Popular
                </Badge>
              )}
              
              <div className="text-center mb-6 sm:mb-8">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-transform duration-300 hover:scale-110 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-primary to-secondary' 
                    : 'bg-primary'
                }`}>
                  <plan.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">{plan.name}</h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 px-2">{plan.description}</p>
                <div className="mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">R$</span>
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm sm:text-base">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm lg:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "secondary" : "default"} 
                className="w-full transition-all duration-300 hover:scale-105"
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 lg:mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">Precisa de algo personalizado?</p>
          <Button variant="outline" size="lg" className="transition-all duration-300 hover:scale-105">
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;