import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto para ver o que a automação e a IA podem fazer por você?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Preencha o formulário abaixo e um de nossos especialistas entrará em 
            contato para entender as necessidades do seu negócio e mostrar como 
            podemos ajudar. Sem compromisso, apenas soluções.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="cta" className="bg-white text-primary hover:bg-white/90">
              Solicitar Consultoria Gratuita
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Baixar Material Informativo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;