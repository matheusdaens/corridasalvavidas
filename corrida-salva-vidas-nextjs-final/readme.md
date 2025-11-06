# Corrida Salva Vidas Brasil 🏃‍♂️🇧🇷

Matheus Augusto Lamussi Daens - 10426754
Gabriel Maschietto Leal - 10738296

## 📘 Descrição do Projeto
O **Corrida Salva Vidas Brasil** é um projeto desenvolvido originalmente em HTML, CSS e JavaScript e **totalmente migrado para ReactJS com Next.js**.  
O objetivo é apresentar um site informativo sobre corrida e saúde, com páginas dedicadas a nutrição, planilhas de treino, equipamentos, dicas e mais.  

Nesta entrega, todas as páginas e funcionalidades principais foram migradas para o ecossistema React/Next.js, **sem uso de código legado** e **ainda sem consumo de APIs externas**.

---

## 🚀 Tecnologias Utilizadas
- **Next.js 14** (App Router)
- **React 18**
- **JavaScript (ES6+)**
- **CSS Modules / Global Styles**
- **Next/Image** para otimização de imagens
- **Next/Link** para navegação entre páginas
- **Node.js** (para execução do projeto)

---

## 📂 Estrutura do Projeto

corrida-salva-vidas-nextjs-final/
├── app/
│ ├── page.js # Página inicial
│ ├── colaborador/page.js # Página de colaboradores
│ ├── contato/page.js # Página de contato
│ ├── dicas/page.js # Dicas de corrida
│ ├── equipamentos/page.js # Equipamentos recomendados
│ ├── login/page.js # Tela de login
│ ├── nutricao/page.js # Dicas de nutrição
│ ├── planilhas/page.js # Planilhas de treino
│ ├── start/page.js # Página de início
│ └── globals.css # Estilo global
│
├── src/components/
│ ├── Header.js # Cabeçalho do site
│ ├── Navigation.js # Menu de navegação
│ └── Carousel.js # Carrossel de imagens
│
├── public/ # Imagens e ícones públicos
├── package.json # Dependências e scripts
├── next.config.js # Configuração Next.js
└── README.md # Documentação do projeto

---

## ⚙️ Como Executar o Projeto

### 1.Clonar o repositório
bash
git clone https://github.com/seu-usuario/corrida-salva-vidas-nextjs.git
cd corrida-salva-vidas-nextjs-final

### 2. Instalar dependências
npm install

### 3. Rodar o projeto localmente
npm run dev


O projeto estará disponível em:
http://localhost:3000

### 4. Gerar build de produção
npm run build
npm start

### Funcionalidades Principais

- Navegação entre páginas com Next Router
- Componentização completa em React
- Layout responsivo e reutilizável
- Formulários de contato e login (simulados)
- Carrossel de imagens funcional em React
- Estilo global e modularizado

### Pontos Pendentes / Próximos Passos

- Implementar consumo de API real (login, envio de formulário etc.)
- Adicionar integração com banco de dados (ex: Firebase ou MongoDB)
- Melhorar feedback visual dos formulários (substituir alert() por mensagens inline)
- Adicionar testes unitários e de integração
- Otimizar SEO e metadados (Next Head)