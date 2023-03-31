<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    public const STATUS_ACTIVE = 'active';
    public const STATUS_INACTIVE = 'inactive';

    protected $fillable = [
        'post_id',
        'user_name',
        'user_email',
        'user_comment',
        'status',
    ];

    protected $appends = ['days_ago', 'avatar_url'];

    public function getDaysAgoAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function getAvatarUrlAttribute()
    {
        return \Storage::url('user.png');
    }
}
