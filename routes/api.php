<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\AdsController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CommentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



Route::group(['prefix' => 'v1'], function () {
    Route::get('get-menu', [MenuController::class, 'getMenu']);

    Route::get('get-five-featured-posts', [PostController::class, 'getFiveFeaturedPosts']);
    Route::get('get-three-recent-posts', [PostController::class, 'getThreeRecentPosts']);
    Route::get('posts', [PostController::class, 'getPosts']);
    Route::get('posts-by-category', [PostController::class, 'postsByCategory']);
    Route::get('posts-by-author', [PostController::class, 'postsByAuthor']);
    Route::get('post/{slug}', [PostController::class, 'getPostBySlug']);
    Route::get('search-post', [PostController::class, 'searchPost']);

    Route::get('get-ads', [AdsController::class, 'getAds']);

    Route::get('get-most-categories', [CategoryController::class, 'getMostCategories']);

    Route::post('add-comment', [CommentController::class, 'addComment']);
    Route::get('get-comments-by-post-id', [CommentController::class, 'getCommentsByPostId']);
});
