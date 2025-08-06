const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">F</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-foreground">FloraTech Solutions</span>
            </div>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              Transformamos empresas através da automação inteligente e IA, 
              proporcionando crescimento sustentável e resultados mensuráveis.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">Empresa</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Sobre Nós</a></li>
              <li><a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Benefícios</a></li>
              <li><a href="#precos" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Preços</a></li>
              <li><a href="#contato" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">Contato</h3>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
              <li>contato@floratech.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-6 sm:mt-8 lg:mt-10 pt-6 sm:pt-8 text-center">
          <p className="text-muted-foreground text-sm sm:text-base">
            © 2024 FloraTech Solutions. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;