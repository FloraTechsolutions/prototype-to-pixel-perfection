import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 border border-white rounded-full animate-pulse"></div>
        <div className="absolute top-16 sm:top-32 right-8 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 border border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-24 h-24 sm:w-40 sm:h-40 border border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-18 h-18 sm:w-28 sm:h-28 border border-white rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight px-4">
            Pronto para ver o que a automação e a IA podem fazer por você?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Preencha o formulário abaixo e um de nossos especialistas entrará em 
            contato para entender as necessidades do seu negócio e mostrar como 
            podemos ajudar. Sem compromisso, apenas soluções.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-scale-in px-4">
            <Button variant="cta" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4">
              Solicitar Consultoria Gratuita
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4">
              Baixar Material Informativo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;