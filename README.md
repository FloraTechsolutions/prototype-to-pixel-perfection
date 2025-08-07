# FloraTech Solutions - Landing Page

Uma landing page profissional para FloraTech Solutions, especializada em automação e IA para empresas.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápido
- **Tailwind CSS** - Framework de CSS utilitário
- **shadcn/ui** - Componentes de UI
- **React Router** - Roteamento
- **Lucide React** - Ícones
- **React Query** - Gerenciamento de estado

## 📱 Funcionalidades

- ✅ Design responsivo para mobile, tablet e desktop
- ✅ Seção Hero com call-to-action
- ✅ Apresentação de benefícios e funcionalidades
- ✅ Tabela de preços com 3 planos
- ✅ Seção de contato/CTA
- ✅ Navegação suave entre seções
- ✅ Animações e transições elegantes
- ✅ SEO otimizado

## 🎨 Design System

O projeto utiliza um design system completo com:
- Tokens de cores semânticas
- Variantes de componentes
- Animações customizadas
- Tipografia consistente
- Gradientes e sombras

## 🏃‍♂️ Como executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <seu-repositorio>

# Navegue para o diretório
cd floratech-landing

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Build para produção
```bash
# Gerar build otimizado
npm run build

# Visualizar build localmente
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes de UI (shadcn)
│   ├── Header.tsx       # Cabeçalho com navegação
│   ├── Hero.tsx         # Seção principal
│   ├── Features.tsx     # Benefícios e funcionalidades
│   ├── Pricing.tsx      # Tabela de preços
│   ├── CTA.tsx          # Call-to-action final
│   └── Footer.tsx       # Rodapé
├── pages/               # Páginas da aplicação
├── assets/              # Imagens e recursos
├── lib/                 # Utilitários
└── hooks/               # Custom hooks
```

## 💰 Planos e Preços

- **Starter**: R$ 3.800/mês
- **Profissional**: R$ 5.500/mês  
- **Enterprise**: R$ 12.000/mês

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub à Vercel
2. Configure o comando de build: `npm run build`
3. Configure o diretório de output: `dist`
4. Deploy automático a cada push

### Netlify
1. Conecte seu repositório GitHub à Netlify
2. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy automático

### GitHub Pages
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Adicionar ao package.json
"homepage": "https://seuusuario.github.io/floratech-landing",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

## 📄 Licença

MIT License - Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

FloraTech Solutions - [contato@floratech.com](mailto:contato@floratech.com)

Site: [https://floratech.com](https://floratech.com)