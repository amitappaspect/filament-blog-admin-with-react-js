<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => \App\Models\User::all()->random()->id,
            'category_id' => \App\Models\Category::all()->random()->id,
            'title' => fake()->sentence(rand(6,10)),
            'description' => fake()->realText(rand(200,300)),
            'status' => 'publish',
            'feature_image' => 'posts/Sample Image 000'.str_pad(rand(1,50), 2, '0', STR_PAD_LEFT).'.png',
        ];
    }
}
