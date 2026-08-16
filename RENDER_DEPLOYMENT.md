# Render.com Deployment Guide

## Preparação para Deploy

1. **Conectar repositório Git** ao Render
2. **Criar conta/projeto** em https://render.com
3. **Configurar variáveis de ambiente** no dashboard do Render

## Instruções de Deployment

### Via Dashboard (Recomendado)

1. Acesse https://dashboard.render.com
2. Clique em **"New +"** → **"Web Service"**
3. Conecte seu repositório GitHub
4. Configure:
   - **Name**: `laravel-api`
   - **Runtime**: Docker
   - **Region**: Oregon (ou sua preferência)
   - **Plan**: Starter (gratuito, suspende após 15 min inativo)
5. **Environment Variables**:
   ```
   APP_ENV=production
   APP_DEBUG=false
   APP_URL=https://seu-app.onrender.com
   DB_CONNECTION=sqlite
   DB_DATABASE=database/database.sqlite
   ```
6. Clique **"Create Web Service"**

### Via CLI (Alternativo)

```bash
# Instalar Render CLI
npm install -g @render-com/cli

# Fazer login
render login

# Deploy
render deploy --file render.yaml
```

## Estrutura de Build

- **Dockerfile**: Multi-stage build otimizado (builder → runtime)
- **Builder Stage**: Instala dependências Composer
- **Runtime Stage**: Apenas dependências necessárias (~342MB)
- **User Context**: Executa como `laravel` (não root)

## Pontos Importantes

- **SQLite**: Funciona em Render, mas dados são perdidos ao redeploy
- **Para Produção**: Migre para PostgreSQL (incluído no Render)
- **Migrations**: Executadas automaticamente no startup
- **Port**: Dinâmica via `$PORT` env var

## Troubleshooting

### Logs
```bash
render logs --service laravel-api
```

### Variáveis de Ambiente
Adicione no dashboard → Service → Environment

### Rebuild
```bash
render deploy --clear-cache
```

## Próximos Passos

1. Migre para PostgreSQL (melhor para produção)
2. Configure CORS para aceitar requests do seu frontend
3. Implemente health checks (`/health`)
4. Configure SSL/TLS (automático no Render)
5. Configure CI/CD pipeline com GitHub Actions
