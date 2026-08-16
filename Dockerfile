FROM php:8.5-cli

WORKDIR /var/www/html

# Install dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    git unzip curl libicu-dev libonig-dev libxml2-dev libsqlite3-dev libzip-dev \
    && docker-php-ext-configure intl \
    && docker-php-ext-install pdo_sqlite pdo_mysql mbstring exif pcntl bcmath zip intl \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && rm -rf /var/lib/apt/lists/*

# Copy all files first
COPY . .

# Install Composer dependencies (with scripts enabled for post-install)
RUN composer install --no-interaction --no-progress --prefer-dist --no-dev --optimize-autoloader

# Create directories and set permissions
RUN mkdir -p storage bootstrap/cache database && \
    chmod -R 775 storage bootstrap/cache database && \
    touch database/database.sqlite

# Create non-root user
RUN useradd -G www-data,root -u 1000 -d /home/laravel -m -s /bin/bash laravel && \
    chown -R laravel:laravel /var/www/html

USER laravel

EXPOSE 8000

CMD ["sh", "-c", "php artisan key:generate --force 2>/dev/null || true && php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=$PORT"]
