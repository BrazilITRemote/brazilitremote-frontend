# Projeto Brazil IT Remote  
**Next.js + TypeScript + Tailwind CSS v4**  

> Estrutura mínima, mobile-first e sem expor config do Tailwind (já existente).

---

## 1. Instruções de Layout & Componentes

1. **Mobile-First**  
   - Todas as seções pensadas para 320px; depois, adapte com `sm:`, `md:`, `lg:`.  
2. **Pasta `src/app` como entrypoint**  
   - `layout.tsx` para o wrapper global (navbar + footer).  
   - `page.tsx` para injetar as seções em ordem.  
3. **Atomic Design em `components/ui`**  
   - Botões, cards, badges, avatares como componentes reutilizáveis.  
4. **Seções isoladas em `components/SectionXxx.tsx`**  
   - Cada seção (“Hero”, “Sobre”, “Oficinas”…) é um componente puro que recebe props.  
5. **Dados estáticos em `lib/`**  
   - Arrays de workshops, organizadores e métricas para mapear nos JSX.  
6. **Estilização com Tailwind v4**  
   - Use apenas classes utilitárias e CSS Theme Variables inline (veja seção abaixo).  
   - Padding & margin via escala modular (`p-4`, `space-y-6`, etc.).  
7. **Acessibilidade & SEO**  
   - Tags semânticas (`<header>`, `<main>`, `<section>`, `<footer>`).  
   - `alt` em imagens e `aria-label` em botões de menu.

---

## 2. Tailwind CSS v4 com CSS Theme Variables

A partir da versão 4, o Tailwind permite definir **variáveis de tema direto no CSS** usando o bloco `@theme inline`, eliminando a necessidade de manter um arquivo `tailwind.config.js` só para cores e fontes. Tudo pode ser feito no seu `globals.css`, deixando a configuração de tema:

```css
@import "tailwindcss";

:root {
  --color-primary: 30 42 56; /* #1E2A38 */
  --color-accent: 42 183 202; /* #2AB7CA */
  --color-highlight: 242 158 76; /* #F29E4C */
  --color-bg: 245 247 250; /* #F5F7FA */
  --color-text: 74 85 104; /* #4A5568 */

  /* Font CSS variables (set by next/font) */
  --font-geist-sans: var(--font-geist-sans);
  --font-geist-mono: var(--font-geist-mono);
}

@theme inline {
  /* Map CSS variables to Tailwind theme tokens */
  --colors-primary-500: rgb(var(--color-primary));
  --colors-accent-500: rgb(var(--color-accent));
  --colors-highlight-500: rgb(var(--color-highlight));
  --colors-gray-50: rgb(var(--color-bg));
  --colors-gray-700: rgb(var(--color-text));

  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: 10 10 10; /* #0A0A0A */
    --color-text: 237 237 237; /* #EDEDED */
  }
}

body {
  background-color: rgb(var(--color-bg) / 1);
  color: rgb(var(--color-text) / 1);
  font-family: var(--font-geist-sans);
}
```

---

## 3. Paleta de Cores (Tokens)

| Uso             | Token Tailwind    | Variável CSS         | Hex      |
| --------------- | ----------------- | -------------------- | -------- |
| Primária        | `primary-500`     | `--color-primary`    | #1E2A38  |
| Secundária      | `accent-500`      | `--color-accent`     | #2AB7CA  |
| Destaque (CTA)  | `highlight-500`   | `--color-highlight`  | #F29E4C  |
| Fundo Principal | `gray-50`         | `--color-bg`         | #F5F7FA  |
| Texto Padrão    | `gray-700`        | `--color-text`       | #4A5568  |

---

## 4. Árvore de Pastas (`src/app`)

```
src/
└── app/
    ├── layout.tsx        # Navbar + Footer + <html>/<body>
    ├── head.tsx          # Metatags e título global
    ├── page.tsx          # Monta as Seções
    ├── globals.css       # CSS Theme Variables + reset + tipografia
    ├── components/
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── AboutSection.tsx
    │   ├── WorkshopsSection.tsx
    │   ├── OrganizersSection.tsx
    │   ├── CalendarSection.tsx
    │   ├── MetricsSection.tsx
    │   └── Footer.tsx
    │   └── ui/
    │       ├── Button.tsx
    │       ├── Card.tsx
    │       ├── Avatar.tsx
    │       └── Badge.tsx
    └── lib/
        ├── workshops.ts   # dados estáticos e tipos
        ├── organizers.ts
        └── metrics.ts
```

---

> **Resumo:**  
> – Tailwind v4 permite temas inline no CSS, dispensando configs separadas.  
> – Defina tokens no `globals.css` e use classes utilitárias normalmente.  
> – Mantenha componentes semânticos, responsivos e reutilizáveis.  
