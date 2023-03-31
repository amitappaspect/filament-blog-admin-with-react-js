<?php

use Illuminate\Support\Facades\Route;
use OpenAI\Laravel\Facades\OpenAI;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/home', function () {
    return view('home');
});


Route::get('/ai', function () {
    return view('ai');
})->name('ai');

Route::post('/ai-result', function (Request $request) {
    // 0.002/1000 * 19 format for price

    if ($request->search) {
        $result = OpenAI::completions()->create([
            'model' => 'text-davinci-003',
            'prompt' => $request->search,
            'max_tokens' => 100,
            'temperature' => 0.5
        ]);
        return view('ai', compact('result'));
    } else {
        return response()->route('ai')->with(['Error'=>'Please enter some text']);
    }
})->name('ai-result');


Route::view('/{path?}', 'home')
     ->where('path', '.*')
     ->name('react');
