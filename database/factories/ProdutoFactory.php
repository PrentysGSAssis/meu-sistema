<?php

namespace Database\Factories;

use App\Models\Produto;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Produto>
 */
class ProdutoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array {
    return [
        'nome' => $this->faker->words(2, true),
        'descricao' => $this->faker->sentence(),
        'preco' => $this->faker->randomFloat(2, 5, 50),
        'categoria' => $this->faker->randomElement(['Cafés', 'Salgados', 'Doces', 'Bebidas Quentes']),
        'imagem' => $this->faker->imageUrl(640, 480, 'food')
    ];
}
}
