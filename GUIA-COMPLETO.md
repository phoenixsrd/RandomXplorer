# 🎯 GUIA COMPLETO - RandomXplorer
## Site de Vídeos Aleatórios com Scraping Automático

---

## 📋 O QUE VOCÊ VAI PRECISAR

1. **Conta no GitHub** (gratuita) - https://github.com
2. **Conta no Vercel** (gratuita) - https://vercel.com
3. **Computador com internet** (Windows, Mac ou Linux)

**TEMPO TOTAL: 15-20 minutos**

---

## 🚀 PASSO A PASSO COMPLETO

### ETAPA 1: CRIAR CONTA NO GITHUB (5 minutos)

1. Acesse: https://github.com
2. Clique em **"Sign up"** (Cadastrar)
3. Preencha:
   - Email
   - Senha
   - Nome de usuário
4. Verifique seu email
5. **Pronto!** Você tem uma conta GitHub

---

### ETAPA 2: FAZER UPLOAD DOS ARQUIVOS (10 minutos)

1. **Faça login no GitHub**

2. **Crie um novo repositório:**
   - Clique no botão **"+"** no canto superior direito
   - Selecione **"New repository"**
   
3. **Configure o repositório:**
   - Repository name: `random-video-site` (pode ser outro nome)
   - Description: `Site de vídeos aleatórios`
   - Marque como **Public** (público)
   - ✅ Marque **"Add a README file"**
   - Clique em **"Create repository"**

4. **Faça upload dos arquivos:**
   - Na página do repositório, clique em **"Add file"** → **"Upload files"**
   - **ARRASTE TODOS OS 4 ARQUIVOS** que você baixou:
     * `index.html`
     * `package.json`
     * `vercel.json`
     * A pasta `api` com o arquivo `random-video.js` dentro
   
   - Clique em **"Commit changes"** (botão verde)

5. **Pronto!** Seus arquivos estão no GitHub

---

### ETAPA 3: HOSPEDAR NO VERCEL (5 minutos)

1. **Acesse:** https://vercel.com

2. **Faça login com GitHub:**
   - Clique em **"Sign Up"**
   - Escolha **"Continue with GitHub"**
   - Autorize o Vercel a acessar sua conta GitHub

3. **Importe seu projeto:**
   - Na página inicial do Vercel, clique em **"Add New..."** → **"Project"**
   - Você verá uma lista dos seus repositórios do GitHub
   - Encontre **"random-video-site"** e clique em **"Import"**

4. **Configure o deploy:**
   - **Framework Preset:** Deixe como "Other"
   - **Root Directory:** Deixe como está (.)
   - **Build Command:** Deixe vazio
   - **Output Directory:** Deixe vazio
   - Clique em **"Deploy"** (botão azul)

5. **Aguarde o deploy (1-2 minutos):**
   - O Vercel vai instalar as dependências e colocar seu site no ar
   - Quando terminar, você verá confetes 🎉

6. **Acesse seu site:**
   - Clique no link que aparece (algo como: `random-video-site.vercel.app`)
   - **PRONTO! SEU SITE ESTÁ NO AR!**

---

## 🎮 COMO USAR SEU SITE

1. Acesse o link do seu site (ex: `random-video-site.vercel.app`)
2. Confirme que você tem +18 anos
3. Escolha uma categoria:
   - 🎲 **Aleatório** - Mistura tudo
   - 🎬 **Vídeos** - Só vídeos normais
   - 🎨 **Hentai** - Só hentai
   - 📝 **Legendado** - Sites com mais legendados
4. Clique em **"Surpreenda-me!"**
5. O site vai buscar um vídeo aleatório e abrir automaticamente!

---

## ⚙️ COMO FUNCIONA A MÁGICA

**SOLUÇÃO INTELIGENTE - SEM SCRAPING COMPLEXO!**

1. **Você clica no botão** → O site chama a função no servidor Vercel
2. **Servidor escolhe um site aleatório** → Entre 18+ fontes diferentes
3. **Redireciona para a página /random do site** → Cada site já tem sua própria página aleatória
4. **O próprio site escolhe o vídeo** → Sistema nativo deles (muito mais confiável!)
5. **Abre o vídeo** → Em uma nova aba

**Por que essa solução é melhor?**
- ✅ Mais rápido (não precisa fazer scraping)
- ✅ Mais confiável (usa o sistema nativo dos sites)
- ✅ Sem bloqueios (não sobrecarrega os servidores)
- ✅ Sempre funciona (sites mantêm suas páginas /random)

**Tudo automático! Você não precisa fazer nada!**

---

## 🔧 PERSONALIZAÇÕES (OPCIONAL)

### Mudar o nome do site:

1. No GitHub, abra o arquivo `index.html`
2. Clique no ícone de lápis (editar)
3. Procure por `RandomXplorer` e mude para o que quiser
4. Clique em **"Commit changes"**
5. O Vercel vai atualizar automaticamente em 1 minuto!

### Adicionar mais sites:

1. No GitHub, abra `api/random-video.js`
2. Encontre a seção `randomUrls`
3. Adicione mais URLs no formato:
   ```javascript
   'https://siteexemplo.com/random',
   ```
4. Commit e pronto! Vercel atualiza automaticamente

---

## 🆓 CUSTOS

**TUDO É 100% GRATUITO!**

- ✅ GitHub: Grátis
- ✅ Vercel: Grátis (até 100GB de banda/mês)
- ✅ Sem limite de visitantes
- ✅ Sem cartão de crédito necessário

**Limites do plano gratuito Vercel:**
- 100 GB de banda por mês
- Isso dá para ~10.000-50.000 visitas/mês
- Para uso pessoal, é mais que suficiente!

---

## ❓ PROBLEMAS COMUNS

### "Erro ao buscar vídeo"
**Soluções:** 
- Verifique se o site está realmente no ar no Vercel
- Abra as ferramentas de desenvolvedor (F12) e veja o erro no Console
- Verifique se a URL da API está correta: `https://SEU-SITE.vercel.app/api/random-video`
- Teste a API diretamente: abra `https://SEU-SITE.vercel.app/api/random-video?category=all` no navegador

### "Site não abre"
**Solução:**
- Verifique se o deploy no Vercel terminou (deve mostrar ✓ verde)
- Aguarde 1-2 minutos após fazer changes
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Tente em modo anônimo

### "Abre sempre o mesmo site"
**Solução:**
- É aleatório, pode repetir às vezes
- Com 26+ opções, a variedade é boa
- Continue clicando que vai variar

### "Função serverless não funciona"
**Soluções:**
- Certifique-se que a pasta `api` está na raiz do projeto
- Verifique se o arquivo se chama exatamente `random-video.js`
- No Vercel, vá em "Deployments" → clique no último deploy → veja os logs
- Se tiver erro 404, reconfigure o projeto no Vercel

---

## 📊 ESTATÍSTICAS DO SEU SITE

**Sites disponíveis:**

**Vídeos (18 fontes):**
- Pornhub, Xvideos, XNXX, RedTube, YouPorn
- Spankbang, Tube8, Beeg, xHamster, Txxx
- PornTrex, HQPorner, EPORNER, Tnaflix
- 4tube, Porn300, Fapster, Upornia

**Hentai (8 fontes):**
- Hanime, Multporn, Simply Hentai, AnimePorn
- HentaiGasm, 3DHentai, Pornhub Hentai, HentaiWorld

**Legendado (4 fontes principais):**
- Pornhub, Xvideos, Spankbang, xHamster

**Total: 26+ URLs diferentes!**

---

## 🔐 SEGURANÇA E PRIVACIDADE

- ✅ Verificação de idade obrigatória
- ✅ Não coleta dados pessoais
- ✅ Não armazena histórico
- ✅ Todos os vídeos são de sites terceiros
- ✅ Você não hospeda nenhum conteúdo

---

## 📞 SUPORTE

Se tiver problemas:
1. Verifique se seguiu todos os passos
2. Veja a seção "Problemas Comuns" acima
3. Verifique os logs no Vercel (aba "Deployments")

---

## 🎉 PRONTO!

Seu site está funcionando e completamente automático!

**Link do seu site:** https://SEU-PROJETO.vercel.app

Compartilhe com amigos (maiores de 18 anos)!

---

## 📝 NOTAS IMPORTANTES

1. **Sistema simplificado** - Usa páginas /random nativas dos sites (muito mais confiável!)
2. **Sem scraping complexo** - Por isso é rápido e sempre funciona
3. **Respeite as leis** - Conteúdo adulto só para +18
4. **Você não hospeda conteúdo** - Só redireciona para sites legítimos
5. **100% gratuito** - GitHub + Vercel = sempre grátis

---

**Feito com ❤️ para você ter o melhor site de vídeos aleatórios!**