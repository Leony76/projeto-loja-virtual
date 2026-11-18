
#!/bin/bash

set -e

cd /var/www/html

echo "==> Preparando ambiente Laravel..."

# Cria o .env caso ainda não exista
if [ ! -f .env ]; then
    cp .env.example .env
fi

echo "==> Instalando dependências Composer..."
composer install --no-interaction --prefer-dist

echo "==> Instalando dependências npm..."
npm ci --include=dev --include=optional

echo "==> Preparando banco SQLite..."
touch database/database.sqlite

if ! grep -q '^APP_KEY=base64:' .env; then
    echo "==> Gerando APP_KEY..."
    php artisan key:generate --force
fi

php artisan optimize:clear


echo "==> Executando migrations..."
php artisan migrate --force

echo "==> Ambiente preparado com sucesso!"
