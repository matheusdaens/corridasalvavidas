## Tutorial de Desenvolvimento - CSS com Flexbox e Media Query

### Como desenvolvemos o CSS

#### Estrutura Base
Começamos resetando margens e paddings para ter um controle total do layout:
```css
* {
    margin: 0;
    padding: 0;
}
```

#### Implementação do Flexbox
Utilizamos flexbox nas navegações para organizar os elementos de forma responsiva idependentemente da resolução do dispositivo:
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
Implementamos dois Media Queries:

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
1. Abrir o arquivo index.html no navegador
2. Pressionar F12 para abrir o DevTools - ou botão direito dentro da pagina e clicar em "inspecionar elemento"
3. Clicar no ícone de dispositivo móvel
4. Testar em diferentes resoluções

### Resultado Final
Layouts adaptados e responsivos corretamente para todos os tipos de resoluções/dispositivos, cumprindo os requisitos de flexbox e media queries solicitados no projeto.

# Tutorial Simplificado do Código JavaScript

Este script é executado quando a página termina de carregar (`DOMContentLoaded`).  
Ele possui três funcionalidades principais: **carrossel de imagens**, **menu mobile** e **validação de formulários**.  



### Carrossel de Imagens
- Seleciona todas as imagens dentro de `.fotoshomepage`.  
- Mostra apenas a primeira imagem e esconde as demais.  
- A cada **3 segundos**, troca para a próxima imagem automaticamente.  




###  Menu Mobile
- Cria um botão **☰ Menu**.  
- **No celular (≤768px):**
  - O botão aparece.  
  - O menu abre/fecha ao clicar no botão.  
- **No desktop (>768px):**
  - O botão some.  
  - O menu aparece normalmente.  




###  Validação de Formulários
- Bloqueia o envio automático do formulário.  
- Verifica se todos os **campos obrigatórios** foram preenchidos.  
- Valida o campo de **email** (precisa ter `@`).  
- Mostra alerta de sucesso e limpa o formulário quando tudo está correto.  


