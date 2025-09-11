## Tutorial de Desenvolvimento - CSS3 com Flexbox e Media Query

### Como desenvolvemos o CSS

#### Estrutura Base
Começamos resetando margens e paddings para ter controle total do layout:
```css
* {
    margin: 0;
    padding: 0;
}
```

#### Implementação do Flexbox
Utilizamos flexbox nas navegações para organizar os elementos de forma responsiva:
```css
nav.home ul, nav.navegacao ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
```

Propriedades utilizadas:
- `display: flex` - ativa o flexbox no container
- `justify-content: center` - centraliza horizontalmente
- `align-items: center` - centraliza verticalmente
- `gap: 20px` - espaçamento uniforme entre itens

#### Media Queries para Responsividade
Implementamos dois breakpoints principais:

**Tablet (768px)**
```css
@media (max-width: 768px) {
    nav.home ul, nav.navegacao ul {
        flex-direction: column;
    }
}
```
Altera a navegação de horizontal para vertical em telas menores.

**Mobile (480px)**
```css
@media (max-width: 480px) {
    header h2 {
        font-size: 1rem;
    }
    section {
        padding: 10px;
    }
}
```
Ajusta tamanhos e espaçamentos para dispositivos móveis.

### Estrutura dos Arquivos
```
corridasalvavidas/
├── index.html
├── start.html
├── dicas.html
├── planilhas.html
├── nutricao.html
├── equipamentos.html
├── style.css
└── logo.png
```

### Como Testar a Responsividade
1. Abrir o index.html no navegador
2. Pressionar F12 para abrir o DevTools
3. Clicar no ícone de dispositivo móvel
4. Testar em diferentes resoluções

### Resultado Final
- **Desktop**: Layout horizontal com navegação espaçosa
- **Tablet**: Navegação adaptada verticalmente
- **Mobile**: Interface otimizada para toque com textos redimensionados

O CSS foi desenvolvido de forma minimalista e funcional, cumprindo os requisitos de flexbox e media queries solicitados no projeto.