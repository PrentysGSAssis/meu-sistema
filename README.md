# Laravel API - REST Backend

## Estrutura

```
laravel-api/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── ProdutoController.php
│   │   │   ├── JogadorController.php
│   │   │   └── UserController.php
│   │   └── Middleware/
│   └── Models/
│       ├── Produto.php
│       ├── Jogador.php
│       └── User.php
├── database/
│   ├── migrations/
│   ├── seeders/
│   └── factories/
├── routes/
│   ├── api.php          ← API REST
│   ├── web.php          ← Fallback/Health
│   └── console.php
├── Dockerfile           ← Multi-stage build
├── docker-compose.yml
├── render.yaml          ← Config Render
└── .env.example
```

## Endpoints Atuais

- `GET /api/user` — User autenticado (Sanctum)
- `GET/POST/PUT/DELETE /api/produtos` — CRUD Produtos
- `GET/POST/PUT/DELETE /api/jogadores` — CRUD Jogadores

## Tech Stack Limpo

- **PHP 8.5** com Laravel 13
- **SQLite** (dev) / PostgreSQL (prod)
- **Sanctum** para autenticação
- **Pest** para testes

## Começar Localmente

```bash
# Setup
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate

# Dev
php artisan serve           # localhost:8000
# ou
docker compose up --build
```

## Deploy no Render

1. Push para GitHub
2. Conecte repositório no Render
3. Render.io faz deploy automático via Dockerfile

Veja `RENDER_DEPLOYMENT.md` para instruções detalhadas.
