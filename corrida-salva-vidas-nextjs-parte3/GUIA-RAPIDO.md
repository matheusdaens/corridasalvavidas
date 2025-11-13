# 🚀 GUIA RÁPIDO - Parte 3

## ⚡ Início Rápido

### 1. Instalar dependências
```bash
cd corrida-nextjs-parte3
npm install
```

### 2. Rodar o projeto
```bash
npm run dev
```

### 3. Acessar
```
http://localhost:3000
```

---

## 🎯 O que testar?

### 1. APIs
Abra no navegador para ver o JSON:
- http://localhost:3000/api/dicas (lista todas)
- http://localhost:3000/api/dicas/1 (dica específica)
- http://localhost:3000/api/dicas/6 (última dica)
- http://localhost:3000/api/dicas/999 (erro 404)

### 2. Página com API
- http://localhost:3000/dicas
  - ✅ Mostra loading
  - ✅ Carrega 6 dicas da API
  - ✅ Cards clicáveis

### 3. Rota Dinâmica
Clique em "Ver detalhes" em qualquer dica ou acesse:
- http://localhost:3000/dicas/1
- http://localhost:3000/dicas/2
- http://localhost:3000/dicas/3
- etc.

---

## 📋 Checklist de Verificação

### Parte 3 - Check-in
- [x] API Routes criadas (`/api/dicas`)
- [x] Consumo de API com `fetch` e `useEffect`
- [x] Rota dinâmica (`/dicas/[id]`)
- [x] Estado de loading
- [x] Tratamento de erro
- [x] Navegação entre lista e detalhes

### Projeto Completo
- [x] Todas as páginas funcionando
- [x] Design responsivo
- [x] Componentes reutilizáveis
- [x] README documentado
- [x] Código limpo e comentado

---

## 🎓 Demonstração para o Professor

### Mostrar:
1. **API funcionando** - Abrir `/api/dicas` no navegador
2. **Página /dicas** - Mostrar loading → lista de dicas
3. **DevTools** - Network tab mostrando chamada à API
4. **Rota dinâmica** - Clicar em uma dica → página de detalhes
5. **Código** - `app/dicas/page.js` com useEffect e fetch
6. **Tratamento de erro** - Acessar `/dicas/999`

---

## 📦 Envio no Moodle/GitHub

### Arquivos para enviar:
✅ Pasta completa (sem node_modules)
✅ README.md
✅ PARTE3-RESUMO.md
✅ Código-fonte

### Como zipar:
1. Apague `node_modules` e `.next`
2. Compacte a pasta
3. Envie o ZIP

---

## 🎉 Pronto!

Seu projeto Parte 3 está **100% completo** e pronto para apresentação!

**Boa sorte! 💚**
