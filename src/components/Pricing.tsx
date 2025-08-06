import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Star, Rocket } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "2.500",
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
      price: "7.500", 
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
      price: "15.000",
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
    <section id="precos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projetos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Iniciais
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para começar sua transformação digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 hover:shadow-2xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-primary shadow-xl scale-105' 
                  : 'border border-border shadow-lg'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                  Mais Popular
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-primary to-secondary' 
                    : 'bg-primary'
                }`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">R$</span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "secondary" : "default"} 
                className="w-full"
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Precisa de algo personalizado?</p>
          <Button variant="outline" size="lg">
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;