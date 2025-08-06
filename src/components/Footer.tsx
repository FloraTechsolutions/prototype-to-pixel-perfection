const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg"></div>
              <span className="text-xl font-bold text-foreground">AutoIA</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Transformamos empresas através da automação inteligente e IA, 
              proporcionando crescimento sustentável e resultados mensuráveis.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors">Benefícios</a></li>
              <li><a href="#precos" className="text-muted-foreground hover:text-primary transition-colors">Preços</a></li>
              <li><a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>contato@autoia.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 AutoIA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;