<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ads', function (Blueprint $table) {
            $table->id();
            $table->string('ad_title');
            $table->string('ad_description')->nullable();
            $table->string('ad_size')->nullable();
            $table->string('ad_image')->nullable();
            $table->string('ad_link')->nullable();
            $table->integer('ad_open_in_new_tab')->default(1)->comment('0 = no, 1 = yes');
            $table->date('expire_on')->nullable();
            $table->string('ad_place')->comment('header, footer, left sidebar, right sidebar, betwen list, detail page');
            $table->string('status')->default('active')->comment('Active, Inactive');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ads');
    }
};
