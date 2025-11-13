# Corrida Salva Vidas Brasil - Next.js (Parte 3 Completa) 🏃‍♂️🇧🇷

**Autores:**
- Matheus Augusto Lamussi Daens - 10426754
- Gabriel Maschietto Leal - 10738296

---

## 📘 Descrição do Projeto

O **Corrida Salva Vidas Brasil** é um projeto web completo desenvolvido em **Next.js 14 com React 18**, focado em promover a saúde através da prática de corrida. Este projeto passou por 3 etapas de desenvolvimento:

1. **Parte 1**: Estrutura inicial do projeto em Next.js
2. **Parte 2**: Migração completa do HTML para React/Next.js
3. **Parte 3 (ATUAL)**: Implementação de **consumo de API** e **rotas dinâmicas** ✅

---

## 🎯 Novidades da Parte 3

### ✅ **1. API Routes (Mock Data)**
Criamos APIs internas no Next.js para simular um backend:

- **`/api/dicas`** - Lista todas as dicas de treino
- **`/api/dicas/[id]`** - Retorna uma dica específica por ID

📁 Localização:
```
app/api/dicas/
├── route.js           # GET /api/dicas
└── [id]/route.js      # GET /api/dicas/1, /api/dicas/2, etc.
```

### ✅ **2. Consumo de API com fetch e useEffect**
A página `/dicas` agora:
- **Busca dados da API** ao carregar
- Mostra **loading** durante o carregamento
- Trata **erros** caso a API falhe
- **Lista todas as dicas** dinamicamente

```javascript
useEffect(() => {
  fetch('/api/dicas')
    .then(response => response.json())
    .then(data => setDicas(data.data))
    .catch(err => setError(err.message))
}, [])
```

### ✅ **3. Rota Dinâmica `/dicas/[id]`**
Página de detalhes de cada dica:
- URL: `/dicas/1`, `/dicas/2`, etc.
- Consome API dinâmica
- Mostra conteúdo completo da dica
- Tratamento de erro caso ID não exista

📁 Localização: `app/dicas/[id]/page.js`

---

## 🚀 Tecnologias Utilizadas

- **Next.js 14** (App Router)
- **React 18** (Hooks: useState, useEffect)
- **JavaScript ES6+**
- **CSS Global** (sem Tailwind ou CSS-in-JS)
- **fetch API** para consumo de dados
- **Next/Image** para otimização de imagens
- **Next/Link** para navegação
- **Node.js** para execução

---

## 📂 Estrutura do Projeto

```
corrida-salva-vidas-nextjs/
├── app/
│   ├── api/                    # 🆕 APIs (Parte 3)
│   │   └── dicas/
│   │       ├── route.js        # GET /api/dicas
│   │       └── [id]/route.js   # GET /api/dicas/:id
│   │
│   ├── dicas/                  # 🆕 Consumo de API (Parte 3)
│   │   ├── page.js             # Lista dicas (fetch)
│   │   └── [id]/page.js        # Detalhes dica (rota dinâmica)
│   │
│   ├── page.js                 # Página inicial
│   ├── colaborador/page.js
│   ├── contato/page.js
│   ├── equipamentos/page.js
│   ├── login/page.js
│   ├── nutricao/page.js
│   ├── planilhas/page.js
│   ├── start/page.js
│   ├── layout.js
│   └── globals.css
│
├── src/components/
│   ├── Header.js               # Cabeçalho reutilizável
│   ├── Navigation.js           # Menu de navegação
│   └── Carousel.js             # Carrossel de imagens
│
├── public/
│   ├── logo.png
│   └── images/
│       ├── foto1.jpg
│       └── foto2.jpg
│
├── package.json
├── next.config.js
├── jsconfig.json
├── .gitignore
└── README.md
```

---

## ⚙️ Como Executar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/corrida-salva-vidas-nextjs.git
cd corrida-salva-vidas-nextjs
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Rodar em desenvolvimento
```bash
npm run dev
```

Acesse: **http://localhost:3000**

### 4. Testar as APIs
- **Lista de dicas**: http://localhost:3000/api/dicas
- **Dica específica**: http://localhost:3000/api/dicas/1

### 5. Build para produção
```bash
npm run build
npm start
```

---

## 🎨 Funcionalidades Implementadas

### ✅ Parte 1 e 2 (Base)
- ✅ Estrutura Next.js completa
- ✅ Componentização React
- ✅ 9 páginas funcionais
- ✅ Navegação com Next Router
- ✅ Layout responsivo
- ✅ Carrossel automático
- ✅ Formulários com validação
- ✅ Menu mobile

### ✅ Parte 3 (Novo - API)
- ✅ **API Routes** (mock data em `/api/dicas`)
- ✅ **Consumo de API** com `fetch` e `useEffect`
- ✅ **Rota dinâmica** `/dicas/[id]`
- ✅ **Loading states** durante carregamento
- ✅ **Tratamento de erros** da API
- ✅ **Listagem dinâmica** de dados
- ✅ **Navegação entre lista e detalhes**

---

## 📝 Exemplo de Uso da API

### Listar todas as dicas
```javascript
// GET /api/dicas
{
  "success": true,
  "data": [
    {
      "id": 1,
      "titulo": "Aqueça antes de correr",
      "descricao": "Fazer um aquecimento adequado...",
      "conteudo": "Dedique de 5 a 10 minutos...",
      "categoria": "Iniciante",
      "duracao": "5-10 min"
    },
    // ... mais dicas
  ],
  "total": 6
}
```

### Buscar dica específica
```javascript
// GET /api/dicas/1
{
  "success": true,
  "data": {
    "id": 1,
    "titulo": "Aqueça antes de correr",
    // ... dados completos
  }
}
```

---

## 🔍 Conceitos Aplicados

### React Hooks Utilizados
- **useState**: Gerenciamento de estado (dicas, loading, error)
- **useEffect**: Side effects (fetch de API)
- **useParams**: Captura de parâmetros da URL (rota dinâmica)

### Next.js Features
- **App Router**: Sistema de roteamento moderno
- **API Routes**: Backend serverless integrado
- **Dynamic Routes**: Rotas com parâmetros `[id]`
- **Server Components**: Componentes otimizados
- **Client Components**: Interatividade com `'use client'`

---

## 📊 Checklist do Projeto Borboleta

### ✅ Requisitos Obrigatórios
- [x] Migrar site para React/Next.js
- [x] Utilizar useState e useEffect
- [x] Realizar chamada de API (client-side)
- [x] Rota simples (ex: `/sobre`)
- [x] Rota dinâmica (ex: `/dicas/[id]`)
- [x] Manter caráter extensionista
- [x] README em formato tutorial
- [x] Código comentado e documentado

### ✅ Entregas
- [x] Repositório GitHub funcional
- [x] README completo com tutorial
- [x] Demonstração funcionando localmente
- [x] Código limpo e organizado

---

## 🎓 Aprendizados

### Parte 1
- Configuração de projeto Next.js
- Estrutura de pastas moderna (App Router)
- CSS global e responsivo

### Parte 2  
- Componentização em React
- Hooks (useState, useEffect)
- Roteamento Next.js
- Conversão de HTML para JSX

### Parte 3
- **API Routes no Next.js**
- **Consumo de APIs com fetch**
- **Rotas dinâmicas com parâmetros**
- **Estado de loading e erro**
- **Navegação entre páginas relacionadas**

---

## 🔄 Fluxo de Dados (Parte 3)

```
1. Usuário acessa /dicas
   ↓
2. useEffect chama fetch('/api/dicas')
   ↓
3. API retorna JSON com array de dicas
   ↓
4. setState atualiza o estado com os dados
   ↓
5. React re-renderiza listando as dicas
   ↓
6. Usuário clica em "Ver detalhes"
   ↓
7. Navega para /dicas/1 (rota dinâmica)
   ↓
8. useEffect chama fetch('/api/dicas/1')
   ↓
9. API retorna JSON com dica específica
   ↓
10. setState atualiza e mostra detalhes
```

---

## 🚧 Próximos Passos (Futuro)

- [ ] Conectar com banco de dados real (MongoDB/PostgreSQL)
- [ ] Implementar autenticação real (NextAuth.js)
- [ ] Adicionar mais endpoints de API
- [ ] Implementar sistema de favoritos
- [ ] Deploy na Vercel
- [ ] Testes automatizados (Jest/Testing Library)
- [ ] Adicionar mais rotas dinâmicas (planilhas, equipamentos)

---

## 📞 Contato

**Dúvidas sobre o projeto?**
- Entre em contato através da página `/contato`
- Ou abra uma issue no GitHub

---

## 📜 Licença

Este projeto foi desenvolvido para fins acadêmicos (Projeto Borboleta - Check-in Parte 3).

---

**Desenvolvido com 💚 por Matheus e Gabriel**
