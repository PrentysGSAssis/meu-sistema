<?php

namespace Database\Factories;

use App\Models\Jogador;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Jogador>
 */
class JogadorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nome' => fake()->name('male'),
            'data_nascimento' => fake()->date('Y-m-d', '2005-01-01'),
            'altura' => fake()->randomFloat(2, 1.60, 2.00),
            'peso' => fake()->randomFloat(2, 60, 100),
            'nacionalidade' => fake()->country(),
            'imagem' => 'https://placehold.co/250x250',
        ];
    }
}
