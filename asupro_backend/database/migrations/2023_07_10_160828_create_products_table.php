<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->increments('id')->unsigned(false);
            $table->string('nombre');
            $table->string('marca')->nullable();
            $table->decimal('precio', 10, 2);
            $table->string('imagen')->nullable();
            $table->integer('unidad_medida_id')->index();
            $table->integer('categoria_id')->index();
            $table->integer('stock');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
