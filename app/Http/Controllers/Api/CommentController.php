<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function addComment(Request $request)
    {
        $request->validate([
            'post_id' => 'required|exists:posts,id',
            'user_name' => 'required|max:40',
            'user_email' => 'required|email|max:50',
            'user_comment' => 'required|max:200',
        ]);
        try {
            $request['status'] = Comment::STATUS_ACTIVE;
            Comment::create($request->all());

            return response('Comment added successfully!', 200);
        } catch (\Throwable $th) {
            return response($th->getMessage(), 422);
        }
    }

    public function getCommentsByPostId(Request $request)
    {
        $request->validate([
            'post_id' => 'required|exists:posts,id',
        ]);
        $comments = Comment::where('post_id', $request->post_id)->latest()->paginate(2000);
        return $comments;
    }
}
