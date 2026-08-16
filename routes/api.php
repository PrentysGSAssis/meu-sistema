<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\JogadorController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('produtos', ProdutoController::class);

Route::apiResource('jogadores', JogadorController::class)->parameters(['jogadores' => 'jogador']);