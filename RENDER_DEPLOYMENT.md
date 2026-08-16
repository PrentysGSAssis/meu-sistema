# Guia de Deploy no Render

## O que foi corrigido

O erro `post-autoload-dump event returned with error code 1` ocorria porque o Dockerfile estava tentando rodar `composer dump-autoload` **sem os scripts habilitados**.

**Solução:** 
- Simplificado para single-stage build (mais rápido)
- Cópia de arquivos **antes** de instalar dependências
- Scripts do Composer rodando automaticamente (padrão)
- `--optimize-autoloader` habilitado

## Deploy no Render (Passo a Passo)

### 1. Preparar o Repositório GitHub

```bash
git add .
git commit -m "fix: simplify dockerfile for render deployment"
git push origin main
```

### 2. Conectar no Render

1. Acesse https://dashboard.render.com
2. Clique **"New +"** → **"Web Service"**
3. Selecione seu repositório GitHub
4. Configure:
   - **Name**: `laravel-api`
   - **Branch**: `main` (ou sua branch)
   - **Runtime**: Docker
   - **Region**: Oregon (US) — mais barato
   - **Plan**: Free (suspende após 15 min inativo) ou Starter

### 3. Variáveis de Ambiente (Dashboard)

Render gera `APP_KEY` automaticamente. Adicione apenas se necessário:

```
APP_ENV=production
APP_DEBUG=false
DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite
```

### 4. Deploy

Clique **"Create Web Service"** — Render iniciará o build automaticamente.

## Logs e Troubleshooting

### Ver logs em tempo real
```bash
# Via CLI (opcional)
render logs --service laravel-api --tail
```

### Problemas comuns

**Erro: `post-autoload-dump`**
- ✓ Resolvido — Dockerfile simplificado

**Erro: `database.sqlite` não encontrado**
- ✓ Criado automaticamente no startup

**Erro: App Key não gerado**
- ✓ Gerado automaticamente no `CMD`

**Porta não responde**
- Render usa `$PORT` dinâmico — Dockerfile já configurado

## Banco de Dados

### Desenvolvimento (SQLite - Atual)
- Funciona no Render, mas dados perdidos a cada redeploy
- Bom para prototipagem

### Produção (PostgreSQL - Recomendado)
Para usar PostgreSQL no Render:

1. Crie um serviço PostgreSQL no Render
2. Atualize `.env`:
   ```
   DB_CONNECTION=pgsql
   DB_HOST=seu-postgres-url
   DB_PORT=5432
   DB_DATABASE=seu-db
   DB_USERNAME=seu-user
   DB_PASSWORD=sua-senha
   ```
3. Render linkará automaticamente

## Teste Local Antes de Deploy

```bash
# Build
docker build -t laravel-api:test .

# Run
docker run -p 8000:8000 \
  -e APP_ENV=production \
  -e APP_DEBUG=false \
  laravel-api:test

# Teste endpoint
curl http://localhost:8000/api/user
```

## URLs e Endpoints

Após deploy, sua API estará em:
```
https://laravel-api.onrender.com/api/produtos
https://laravel-api.onrender.com/api/jogadores
https://laravel-api.onrender.com/api/user
```

## CORS (Para Frontend)

Se tiver frontend separado, configure CORS em `config/cors.php`:

```php
'allowed_origins' => [
    'https://seu-frontend.onrender.com',
    'https://seu-frontend.vercel.app',
    'localhost:3000', // dev local
],
```

## Próximos Passos

1. ✓ Deploy bem-sucedido
2. Teste endpoints via Postman/Insomnia
3. Configure CORS se necessário
4. Migre para PostgreSQL em produção
5. Configure backup automático (Render Pro)
