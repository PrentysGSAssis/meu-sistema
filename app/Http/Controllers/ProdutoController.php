<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    public function index()
    {
        return response()->json(Produto::all(), 200);
    }

    public function store(Request $request)
    {
        $produto = Produto::create($request->all());
        return response()->json($produto, 201);
    }

    public function show(Produto $produto)
    {
        $produto = Produto::find($produto->id);
        return $produto
            ? response()->json($produto, 200)
            : response()->json(['erro' => 'Produto não encontrado'], 404);
    }

    public function update(Request $request, Produto $produto)
    {
        $produto = Produto::findOrFail($produto->id);
        $produto->update($request->all());
        return response()->json($produto, 200);
    }

    public function destroy(Produto $produto)
    {
        $produto = Produto::findOrFail($produto->id);
        $produto->delete();
        return response()->json(null, 204);
    }
}