<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\UserController;

Route::get('/', function() {
    return redirect('login');
});

Route::get('/home', [ProdutoController::class, 'home'])->middleware(['auth', 'verified'])->name('Home');

Route::get('/products', [ProdutoController::class, 'products'])->middleware(['auth', 'verified'])->name('Products');

Route::post('/buy-product', [ProdutoController::class ,'buyProduct'])->middleware(['auth', 'verified'])->name('product.buy');

Route::put('/user/profile', [UserController::class, 'update'])->middleware(['auth', 'verified'])->name('user.profile');

Route::get('/user-data', function() {
    return Inertia::render('UserData');
})->middleware(['auth', 'verified'])->name('user.data');

Route::get('/my-products', [ProdutoController::class, 'myProducts'])->middleware(['auth', 'verified'])->name('MyProducts');

require __DIR__.'/settings.php';
