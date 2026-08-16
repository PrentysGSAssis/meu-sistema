FROM php:8.5-cli AS builder

WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    git unzip curl libicu-dev libonig-dev libxml2-dev libsqlite3-dev libzip-dev \
    && docker-php-ext-configure intl \
    && docker-php-ext-install pdo_sqlite pdo_mysql mbstring exif pcntl bcmath zip intl \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && rm -rf /var/lib/apt/lists/*

# Copy composer files and install dependencies
COPY composer.json composer.lock ./
RUN composer install --no-interaction --no-progress --prefer-dist --no-scripts --no-dev

# Copy application code
COPY . .

# Generate autoloader
RUN composer dump-autoload --no-interaction --optimize


FROM php:8.5-cli

WORKDIR /var/www/html

# Install runtime dependencies only
RUN apt-get update && apt-get install -y --no-install-recommends \
    libicu-dev libonig-dev libxml2-dev libsqlite3-dev libzip-dev \
    && docker-php-ext-configure intl \
    && docker-php-ext-install pdo_sqlite pdo_mysql mbstring exif pcntl bcmath zip intl \
    && rm -rf /var/lib/apt/lists/* \
    && useradd -G www-data,root -u 1000 -d /home/laravel -m -s /bin/bash laravel

# Copy from builder
COPY --from=builder --chown=laravel:laravel /var/www/html /var/www/html

# Set permissions
RUN chmod -R 775 storage bootstrap/cache

USER laravel

EXPOSE 8000

CMD ["sh", "-c", "php artisan key:generate --force 2>/dev/null || true && php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=8000"]
