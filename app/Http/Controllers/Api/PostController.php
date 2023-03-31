<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function getPosts(Request $request)
    {
        $Posts = Post::with(['category','user'])->paginate(10);

        return $Posts;
    }

    public function getFiveFeaturedPosts()
    {
        $Posts = Post::where('is_featured', 1)->with(['category','user'])->latest()->take(5)->get();

        return $Posts;
    }

    public function getThreeRecentPosts()
    {
        $Posts = Post::where('status', 'publish')->with(['category','user'])->latest()->take(3)->get();

        return $Posts;
    }

    public function searchPost(Request $request)
    {
        $Posts = Post::where('status', 'publish');

        if ($request->has('keyword') && !empty($request->has('keyword'))) {
            return $Posts->where('title', 'LIKE', '%'.$request->keyword.'%')->select('posts.id', 'posts.slug', 'posts.title', 'posts.feature_image')->paginate(20);
        } else {
            return $Posts->select('posts.id', 'posts.slug', 'posts.title', 'posts.feature_image')->paginate(20);
        }
    }

    public function postsByCategory(Request $request)
    {
        $Posts = Post::with(['category','user']);

        if ($request->has('category') && !empty($request->category)) {
            $Posts->whereHas('category', function ($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }

        $Posts = $Posts->paginate(10);

        return $Posts;
    }

    public function postsByAuthor(Request $request)
    {
        $Posts = Post::with(['category','user']);

        if ($request->has('user') && !empty($request->user)) {
            $Posts->whereHas('user', function ($q) use ($request) {
                $q->where('name', $request->user);
            });
        }

        $Posts = $Posts->paginate(10);

        return $Posts;
    }

    public function getPostBySlug($slug)
    {
        $Posts = Post::with(['category','user'])->where('slug', $slug)->first();
        return $Posts;
    }
}
