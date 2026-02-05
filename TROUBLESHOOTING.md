# 🔧 GUIA DE TROUBLESHOOTING
## Como resolver problemas no RandomXplorer

---

## ❌ ERRO: "Erro ao buscar vídeo. Tente novamente!"

Este erro significa que a função serverless não está funcionando. Vamos resolver:

### PASSO 1: Verificar se a API está online

1. Abra seu navegador
2. Digite na barra de endereços:
   ```
   https://SEU-SITE.vercel.app/api/random-video?category=all
   ```
   (Substitua SEU-SITE pelo nome do seu projeto)

3. **O que você deve ver:**
   ```json
   {
     "success": true,
     "url": "https://www.pornhub.com/random",
     "category": "all",
     "message": "Redirecionando para vídeo aleatório"
   }
   ```

4. **Se aparecer erro 404 ou página não encontrada:**
   - Sua função serverless NÃO está instalada
   - Vá para SOLUÇÃO A abaixo

5. **Se aparecer erro 500 ou outro erro:**
   - Há um bug no código
   - Vá para SOLUÇÃO B abaixo

---

### SOLUÇÃO A: Função serverless não encontrada (Erro 404)

**Motivo:** A pasta `api` não foi enviada corretamente para o GitHub/Vercel

**Como corrigir:**

1. **No GitHub, verifique se existe a pasta `api`:**
   - Acesse seu repositório
   - Você deve ver: `api/random-video.js`
   - Se NÃO existir a pasta `api`:

2. **Crie a pasta manualmente:**
   - No GitHub, clique em "Add file" → "Create new file"
   - No nome do arquivo, digite: `api/random-video.js`
   - Cole o conteúdo do arquivo `random-video.js` (está na pasta que você baixou)
   - Clique em "Commit changes"

3. **Aguarde 1-2 minutos** para o Vercel fazer o redeploy automático

4. **Teste novamente** acessando a URL da API

---

### SOLUÇÃO B: Erro 500 ou erro interno

**Como debugar:**

1. **Acesse o Vercel Dashboard:**
   - https://vercel.com
   - Clique no seu projeto

2. **Veja os logs:**
   - Clique na aba "Deployments"
   - Clique no deployment mais recente
   - Clique em "View Function Logs"
   - Veja qual erro está aparecendo

3. **Erros comuns:**
   - `Cannot find module 'cheerio'` → package.json está errado (baixe a versão nova)
   - `CORS error` → Normal, ignore (CORS só funciona depois do deploy)
   - `Timeout` → Site está demorando, tente outro

---

## 🌐 ERRO: Site não abre / Página em branco

### SOLUÇÃO:

1. **Limpe o cache:**
   - Chrome: Ctrl + Shift + Delete → Limpar cache
   - Firefox: Ctrl + Shift + Delete → Limpar cache

2. **Teste em modo anônimo:**
   - Chrome: Ctrl + Shift + N
   - Firefox: Ctrl + Shift + P

3. **Verifique o deploy:**
   - No Vercel, deve estar com ✓ verde
   - Se estiver com X vermelho, clique e veja o erro

4. **Verifique se todos os arquivos foram enviados:**
   - `index.html` ✓
   - `package.json` ✓
   - `vercel.json` ✓
   - `api/random-video.js` ✓

---

## 🔄 Como fazer um REDEPLOY completo

Se nada funcionar, faça um redeploy limpo:

1. **No Vercel:**
   - Acesse seu projeto
   - Vá em "Settings"
   - Role até o final
   - Clique em "Delete Project"
   - Confirme

2. **Importe novamente:**
   - Na página inicial do Vercel
   - "Add New..." → "Project"
   - Selecione seu repositório do GitHub
   - "Deploy"

3. **Aguarde finalizar**

4. **Teste novamente**

---

## 🧪 TESTE RÁPIDO

Use o arquivo `teste-api.html` que está incluído:

1. Abra o arquivo `teste-api.html` no navegador
2. Edite a linha que tem `SEU-SITE-AQUI` e coloque a URL do seu Vercel
3. Clique em "Testar API"
4. Veja a resposta

**Resposta esperada:**
```json
{
  "success": true,
  "url": "https://algumsite.com/random",
  "category": "all",
  "message": "Redirecionando para vídeo aleatório"
}
```

Se aparecer isso, sua API está funcionando! O problema está no frontend.

---

## 🔍 FERRAMENTAS DE DEBUG

### Console do Navegador (F12):

1. Aperte F12 no seu site
2. Vá na aba "Console"
3. Clique no botão "Surpreenda-me!"
4. Veja se aparece algum erro vermelho

**Erros comuns:**
- `Failed to fetch` → API está offline ou URL errada
- `CORS error` → Normal em localhost, funciona quando hospedado
- `404 Not Found` → URL da API está errada no código

### Network Tab (F12):

1. Aperte F12
2. Vá na aba "Network"
3. Clique no botão "Surpreenda-me!"
4. Veja a requisição para `/api/random-video`
5. Clique nela para ver detalhes

**O que verificar:**
- Status Code: deve ser 200
- Response: deve ter `success: true`
- Se status for 404: API não existe
- Se status for 500: erro no código da API

---

## 📞 CHECKLIST FINAL

Antes de pedir ajuda, verifique:

- [ ] Todos os 4 arquivos estão no GitHub (index.html, package.json, vercel.json, api/random-video.js)
- [ ] Deploy no Vercel está com ✓ verde
- [ ] URL da API funciona quando acessada diretamente no navegador
- [ ] Console do navegador (F12) não mostra erros vermelhos
- [ ] Testou em modo anônimo / outro navegador
- [ ] Limpou o cache do navegador

---

## ✅ SOLUÇÃO DEFINITIVA

Se NADA funcionar, faça isso:

1. **Delete tudo:**
   - Delete o repositório no GitHub
   - Delete o projeto no Vercel

2. **Baixe os arquivos novamente** (certifique-se que baixou a versão CORRIGIDA)

3. **Siga o guia desde o início** com atenção redobrada

4. **NÃO modifique nenhum código** até confirmar que está funcionando

---

## 💡 DICA PRO

Para ter certeza que a API funciona, teste ela primeiro ANTES de fazer o frontend:

1. Faça deploy só da pasta `api` e `package.json` e `vercel.json`
2. Teste a URL: `https://seu-site.vercel.app/api/random-video?category=all`
3. Só quando ver a resposta JSON correta, adicione o `index.html`

Isso garante que o problema não está na API!

---

**Se seguir este guia, seu site VAI funcionar! 🚀**