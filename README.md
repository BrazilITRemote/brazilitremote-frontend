# Brazil IT Remote - Frontend

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Frontend da plataforma Brazil IT Remote, desenvolvido com Next.js, TypeScript e Tailwind CSS. Este projeto tem como objetivo conectar profissionais de TI brasileiros com oportunidades de trabalho remoto em todo o mundo.

## 🚀 Tecnologias e Ferramentas

### Principais
- [Next.js](https://nextjs.org/) - Framework React para renderização híbrida com suporte a SSR e SSG
- [React](https://react.dev/) - Biblioteca JavaScript para construção de interfaces de usuário
- [TypeScript](https://www.typescriptlang.org/) - Adiciona tipagem estática ao JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário para estilização
- [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca com mais de 10.000 ícones vetoriais
- [React Markdown](https://github.com/remarkjs/react-markdown) - Renderização segura de conteúdo Markdown

### Desenvolvimento
- [Turbopack](https://turbo.build/pack) - Próxima geração de empacotador para desenvolvimento
- [ESLint](https://eslint.org/) - Linter para identificar e reportar padrões no código
- [PostCSS](https://postcss.org/) - Ferramenta para transformar CSS com JavaScript
- [Tailwind PostCSS](https://tailwindcss.com/docs/installation/using-postcss) - Plugin PostCSS para o Tailwind CSS

### Ferramentas de Build
- [Vite](https://vitejs.dev/) - Ferramenta de build rápida e otimizada (usada pelo Next.js)
- [SWC](https://swc.rs/) - Compilador TypeScript/JavaScript extremamente rápido

### Gerenciamento de Pacotes
- [Yarn](https://yarnpkg.com/) / [npm](https://www.npmjs.com/) - Gerenciadores de pacotes
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript (versão 18.17+)

### Testes (a serem implementados)
- [Jest](https://jestjs.io/) - Framework de testes
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Utilitários para testar componentes React
- [Cypress](https://www.cypress.io/) - Testes E2E

### Qualidade de Código
- [ESLint](https://eslint.org/) - Análise estática de código
- [Prettier](https://prettier.io/) - Formatador de código (configuração recomendada)
- [Husky](https://typicode.github.io/husky/) - Git hooks para qualidade de código

### Infraestrutura
- [Vercel](https://vercel.com/) - Hospedagem e deployment contínuo (recomendado)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images) - Otimização automática de imagens

## 📦 Pré-requisitos

- Node.js 18.17 ou superior
- Yarn ou npm
- Git

## 🔧 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/brazilitremote-frontend.git
   cd brazilitremote-frontend
   ```

2. Instale as dependências:
   ```bash
   # Usando Yarn
   yarn install
   
   # Ou usando npm
   npm install
   ```

3. Crie um arquivo `.env.local` na raiz do projeto com as variáveis de ambiente necessárias:
   ```env
   NEXT_PUBLIC_API_URL=https://api.brazilitremote.com
   # Adicione outras variáveis de ambiente conforme necessário
   ```

## 🚀 Executando o projeto

Para iniciar o servidor de desenvolvimento:

```bash
# Modo desenvolvimento
npm run dev
# ou
yarn dev
```

O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

## 🏗️ Estrutura do Projeto

```
src/
├── app/           # Rotas e páginas da aplicação
├── components/    # Componentes reutilizáveis
├── jobs/          # Definições de trabalhos/oportunidades
├── lib/           # Utilitários e configurações
└── styles/        # Estilos globais e temas
```

## 🛠️ Comandos Úteis

- `yarn dev` - Inicia o servidor de desenvolvimento
- `yarn build` - Constrói a aplicação para produção
- `yarn start` - Inicia o servidor de produção (após o build)
- `yarn lint` - Executa o linter no código

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estes passos para contribuir:

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Faça o Push da Branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✉️ Contato

Projeto desenvolvido pela equipe Brazil IT Remote - [contato@brazilitremote.com](mailto:contato@brazilitremote.com)
