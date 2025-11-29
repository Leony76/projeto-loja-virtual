<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Produto;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ProdutoController extends Controller
{
    public function home() {
        $produtos = Produto::latest()->take(6)->get();

        return Inertia::render('Home', [
            'produtos' => $produtos
        ]);
    }

    public function products() {
        $produtos = Produto::all();

        return Inertia::render('Products', [
            'produtos' => $produtos
        ]);
    }

    public function myProducts() {
        $produtos = Auth::user()
        ->produtos()
        ->select('produtos.*')
        ->selectRaw('COUNT(produto_user.produto_id) as quantidade_comprada')
        ->groupBy(
            'produtos.id',
            'produtos.nome',
            'produtos.valor',
            'produtos.imagem',
            'produtos.categoria',
            'produtos.descricao',
            'produtos.data_posto_p_venda',
            'produtos.quantidade'
        )
        ->get();

        return Inertia::render('MyProducts', [
            'produtos' => $produtos
        ]);
    }

    public function buyProduct(Request $request) {

        $request->validate([
            'produto_id' => 'required|exists:produtos,id'
        ]);


        $user = Auth::user();
        $produto = Produto::lockForUpdate()->findOrFail($request->produto_id);

        if ($produto->quantidade < 1) {
            return back()->with('error', 'Produto fora de estoque!');
        }

        if ($user->saldo < $produto->valor) {
            return back()->with('error', 'Saldo insuficente');
        }

        DB::transaction(function () use ($user, $produto) {
            $user->saldo -= $produto->valor;
            $produto->quantidade -= 1;
            $user->save();
            $produto->save();

            $user->produtos()->attach($produto->id);
        });

        return back()->with('success', 'Compra realizada com sucesso!');
    }
}
