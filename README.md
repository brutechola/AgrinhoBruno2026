# AgrinhoBruno2026

## Sobre o projeto

Este projeto é uma landing page única criada para o Concurso Agrinho 2026. O site apresenta um layout limpo, moderno e responsivo, com foco em consumo consciente, sustentabilidade no campo e a ligação entre produção rural e escolhas de consumo na cidade.

### O que o site faz

- Exibe um cabeçalho com navegação por âncoras para as seções da página.
- Tem uma seção hero com mensagem de impacto sobre o tema "Manual do Consumo Consciente".
- Apresenta uma comparação entre o problema do desperdício e a solução do consumo equilibrado.
- Inclui 5 dicas práticas para o consumidor aplicar em seu dia a dia.
- Destaca como o agro do futuro usa tecnologia para produzir mais com menor impacto ambiental.
- Possui um rodapé com a mensagem de encerramento do Concurso Agrinho 2026 e créditos do desenvolvedor.
- Fornece interatividade básica em JavaScript: rolagem suave entre seções, botão de menu móvel e alertas com explicações extras para cada dica.

## Arquivos do projeto

- `index.html`: estrutura de conteúdo da página única.
- `style.css`: estilos, cores, layout responsivo e efeitos visuais.
- `script.js`: interatividade do menu móvel, navegação suave e alertas nas dicas.

## Design System recomendado

### Paleta de cores

1. **Verde Escuro** - `#1E4D2B`
   - Aplicar: títulos, cabeçalho, bordas de destaque e CTAs principais.
2. **Verde Claro** - `#7BB17A`
   - Aplicar: botões, detalhes interativos, hover suave e destaques positivos.
3. **Bege Suave** - `#F3E8D9`
   - Aplicar: fundo geral, cards e áreas de texto para manter sensação leve.
4. **Cinza Quente** - `#4A4A47`
   - Aplicar: texto do corpo, legendas e elementos secundários.

### Fontes recomendadas do Google Fonts

- **Título:** `Montserrat` (negrito e sem serifa)
- **Corpo:** `Inter` (regular e leve para leitura)

Essas fontes criam contraste entre títulos fortes e texto fluido, mantendo o visual profissional e moderno.

### Variáveis CSS sugeridas

```css
:root {
  --color-primary: #1E4D2B;
  --color-secondary: #7BB17A;
  --color-surface: #F3E8D9;
  --color-text: #4A4A47;
  --color-background: #FFFFFF;
  --color-border: rgba(30, 77, 43, 0.12);
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Inter', sans-serif;
  --radius-default: 16px;
  --shadow-soft: 0 18px 40px rgba(30, 77, 43, 0.08);
}
```

### Exemplo de CSS básico

```css
body {
  font-family: var(--font-body);
  background: var(--color-surface);
  color: var(--color-text);
}

h1, h2, h3, h4 {
  font-family: var(--font-heading);
  color: var(--color-primary);
}

button, .cta {
  background: var(--color-primary);
  color: #FFF;
  border-radius: var(--radius-default);
  transition: transform 0.25s ease, background-color 0.25s ease;
}
```

## Micro-interações recomendadas

### 1) Botões com hover suave

```css
button, .cta {
  transition: transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
}

button:hover, .cta:hover {
  background-color: var(--color-secondary);
  transform: scale(1.03);
  box-shadow: var(--shadow-soft);
}
```

### 2) Links do menu com linha inferior animada

```css
.site-nav a {
  position: relative;
  display: inline-block;
}

.site-nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background: var(--color-secondary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 220ms ease;
}

.site-nav a:hover::after {
  transform: scaleX(1);
}
```

### 3) Fade-in para elementos ao carregar a página

```css
.fade-in {
  opacity: 0;
  transform: translateY(16px);
  animation: fadeInUp 0.9s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Use a classe `.fade-in` em blocos importantes, como o hero, cards e seções principais.

## Como aplicar

- Adicione o carregamento das fontes `Montserrat` e `Inter` no `index.html` via Google Fonts.
- Substitua as cores atuais pelas variáveis no `style.css`.
- Use as classes e micro-interações sugeridas para tornar o site mais dinâmico e sofisticado.

Com esse design system, o site ganha uma aparência mais profissional, com cores naturais e tipografia moderna, além de animações sutis e comportamentos interativos que elevam a experiência do usuário.
