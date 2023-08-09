<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Horarios extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = "horarios";
    protected $fillable = [
        'id',
        'dia_inicio',
        'dia_fin',
        'hora_inicio',
        'hora_fin'
    ];
}
