<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Produto>
 */
class ProdutoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'imagem' => 'produtos.default.png',
            'nome' => fake()->words(3, true),
            'categoria' => fake()->randomElement(['Eletrônico', 'Roupas', 'Alimentos', 'Artesanato']),
            'data_posto_p_venda' => now(),
            'descricao' => fake()->paragraph(),
            'valor' => fake()->randomFloat(2, 10, 2000),
            'quantidade' => fake()->numberBetween(1, 10)
        ];
    }
}
