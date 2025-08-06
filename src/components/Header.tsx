import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm lg:text-base">F</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-foreground">FloraTech Solutions</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Home
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Sobre
            </a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-colors relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Benefícios
            </a>
            <a href="#precos" className="text-foreground hover:text-primary transition-colors relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Preços
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Contato
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="default" className="hidden sm:flex">
              Começar Agora
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-foreground hover:text-primary transition-colors py-2">
                Home
              </a>
              <a href="#sobre" className="block text-foreground hover:text-primary transition-colors py-2">
                Sobre
              </a>
              <a href="#beneficios" className="block text-foreground hover:text-primary transition-colors py-2">
                Benefícios
              </a>
              <a href="#precos" className="block text-foreground hover:text-primary transition-colors py-2">
                Preços
              </a>
              <a href="#contato" className="block text-foreground hover:text-primary transition-colors py-2">
                Contato
              </a>
              <Button variant="default" className="w-full mt-4">
                Começar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;