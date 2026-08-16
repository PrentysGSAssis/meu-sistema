<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jogador extends Model
{
    /** @use HasFactory<\Database\Factories\JogadorFactory> */
    use HasFactory;

    protected $table = 'jogadores';

    protected $fillable = ['nome', 'data_nascimento', 'altura', 'peso', 'nacionalidade', 'imagem'];

    protected $casts = [
        'data_nascimento' => 'date',
        'altura' => 'decimal:2',
        'peso' => 'decimal:2',
    ];
}