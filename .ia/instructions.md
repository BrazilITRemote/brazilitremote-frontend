# Projeto Brazil IT Remote  
**Next.js + TypeScript + Tailwind CSS v4**  

> Estrutura mínima, mobile-first, multi-página (Home + Workshops) e sem expor config do Tailwind.

---

## 1. Instruções de Layout & Componentes

1. **Mobile-First**  
   - Comece em 320px; evolua com `sm:`, `md:`, `lg:`.  
2. **Pasta `src/app` como entrypoint**  
   - `layout.tsx` → wrapper global (Navbar + Footer).  
   - `head.tsx`   → metatags + título base.  
   - `page.tsx`   → **Home** (rota `/`).  
   - `workshops/page.tsx` → **Workshops** (rota `/workshops`).  
3. **Atomic Design em `components/ui`**  
   - Botões, cards, badges, avatares — componentes genéricos.  
4. **Seções isoladas em `components/SectionXxx.tsx`**  
   - Cada seção da Home (Hero, Sobre, Métricas…) é um componente puro.  
   - A página de Workshops pode usar `WorkshopsSection` ou um componente dedicado `WorkshopsList`.  
5. **Dados estáticos em `lib/`**  
   - `workshops.ts` → array de workshops + tipos.  
   - `organizers.ts`, `metrics.ts`…  
6. **Estilização com Tailwind v4**  
   - Classes utilitárias + CSS Theme Variables inline (ver abaixo).  
   - Escala modular de espaçamentos (`p-4`, `space-y-6`, etc.).  
7. **Acessibilidade & SEO**  
   - Tags semânticas (`<header>`, `<main>`, `<section>`, `<footer>`).  
   - `alt` em imagens, `aria-label` em botões de menu.  

---

## 2. Tailwind CSS v4 com CSS Theme Variables

O Tailwind v4 aceita tema inline em CSS sem `tailwind.config.js`. No seu `globals.css`:

```css
@import "tailwindcss";

:root {
  /* cores em RGB triples */
  --color-primary:   30 42 56;     /* #1E2A38 */
  --color-accent:    42 183 202;   /* #2AB7CA */
  --color-highlight: 242 158 76;   /* #F29E4C */
  --color-bg:        245 247 250;  /* #F5F7FA */
  --color-text:      74 85 104;    /* #4A5568 */

  /* fontes providas por next/font */
  --font-geist-sans: var(--font-geist-sans);
  --font-geist-mono: var(--font-geist-mono);
}

@theme inline {
  /* mapeia vars para tokens do Tailwind */
  --colors-primary-500:   rgb(var(--color-primary));
  --colors-accent-500:    rgb(var(--color-accent));
  --colors-highlight-500: rgb(var(--color-highlight));
  --colors-gray-50:       rgb(var(--color-bg));
  --colors-gray-700:      rgb(var(--color-text));

  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg:   10 10 10;    /* #0A0A0A */
    --color-text: 237 237 237; /* #EDEDED */
  }
}

body {
  background-color: rgb(var(--color-bg) / 1);
  color:            rgb(var(--color-text) / 1);
  font-family:      var(--font-geist-sans);
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
    ├── layout.tsx            # Navbar + Footer + <html>/<body>
    ├── head.tsx              # Metatags + título base
    ├── page.tsx              # Home (rota '/')
    ├── globals.css           # Theme vars + reset + tipografia
    ├── workshops/
    │   └── page.tsx          # Workshops (rota '/workshops')
    ├── components/
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── AboutSection.tsx
    │   ├── MetricsSection.tsx
    │   ├── WorkshopsSection.tsx  # (usado em /workshops ou na Home preview)
    │   ├── OrganizersSection.tsx
    │   ├── CalendarSection.tsx
    │   └── Footer.tsx
    │   └── ui/
    │       ├── Button.tsx
    │       ├── Card.tsx
    │       ├── Avatar.tsx
    │       └── Badge.tsx
    └── lib/
        ├── workshops.ts     # dados estáticos + tipos
        ├── organizers.ts
        └── metrics.ts
```

---

## 5. Fluxo de Navegação

- **Home (`/`)**  
  - Seções: Hero, Sobre, Preview de Workshops, Organizadores, Métricas.  
  - CTA “Ver todos os Workshops” aponta para `/workshops`.
- **Workshops (`/workshops`)**  
  - Lista completa de workshops em grid/cards.  
  - Filtro simples (por data ou formato).  
  - Botão “Inscreva-se” em cada card.

---

## 6. Imagens Placeholder

Para desenvolvimento, utilize o serviço placehold.co para gerar imagens placeholder:

```
https://placehold.co/600x400?text=Nome+da+Imagem
```

Exemplos de uso:

- Avatar (80x80px): `https://placehold.co/80x80?text=Avatar`
- Banner (1200x400px): `https://placehold.co/1200x400?text=Banner+Workshop`
- Logo (200x100px): `https://placehold.co/200x100?text=BR+IT`
- Workshop Card (600x400px): `https://placehold.co/600x400?text=Workshop+React`
- Palestrante (300x300px): `https://placehold.co/300x300?text=Palestrante`

Você pode personalizar:
- Dimensões: mude os valores `600x400` 
- Texto: altere `text=Nome+da+Imagem` (use `+` para espaços)
- Cores: Você pode especificar cores de duas formas:
  1. Usando valores hexadecimais: `https://placehold.co/600x400/000000/FFF` (background/foreground)
  2. Usando nomes CSS: `https://placehold.co/600x400/orange/white`
  3. Para backgrounds transparentes: `https://placehold.co/600x400/transparent/F00`

**Importante:** As cores de fundo e texto devem ser especificadas juntas.

Exemplos completos:

```jsx
// Usando valores hexadecimais para background/foreground
<Image 
  src="https://placehold.co/600x400/1E2A38/F5F7FA?text=Workshop+React"
  alt="Workshop de React"
  width={600}
  height={400}
  className="rounded-lg"
/>

// Usando nomes CSS
<Image 
  src="https://placehold.co/600x400/orange/white?text=Workshop+React"
  alt="Workshop de React"
  width={600}
  height={400}
  className="rounded-lg"
/>

// Usando background transparente
<Image 
  src="https://placehold.co/600x400/transparent/F00?text=Workshop+React"
  alt="Workshop de React"
  width={600}
  height={400}
  className="rounded-lg"
/>
```

---

> **Resumo:**  
> - Separe Home e Workshops em rotas distintas.  
> - Reutilize `WorkshopsSection` como preview na Home e como listagem completa em `/workshops`.  
> - Mantenha tudo componetizado, responsivo e semanticamente correto.
