<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory; 

class Produto extends Model
{
    use HasFactory;

    protected $fillable = [
        'imagem',
        'nome',
        'categoria',
        'data_posto_p_venda',
        'descricao',
        'valor',
    ];

    public function users() {
        return $this->belongsToMany(User::class, 'produto_user')->withTimeStamps();
    }
}
