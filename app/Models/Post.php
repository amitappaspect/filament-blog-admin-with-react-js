<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Str;
use Auth;
use Storage;

class Post extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'user_id',
        'category_id',
        'title',
        'slug',
        'description',
        'feature_image',
        'is_featured',
        'status',
    ];

    protected $appends = [
        'feature_image_url',
        'created_time_ago',
        'date_blog_formated'
    ];

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = ($this->where('slug', Str::slug($value))->count()) ? Str::slug($value).'-'.Str::random(5) : Str::slug($value);
        if (!Auth::user()->isAdmin()) {
            $this->attributes['user_id'] = Auth::user()->id;
        }
    }

    public function getFeatureImageUrlAttribute()
    {
        return ($this->feature_image) ? Storage::url($this->feature_image) : 'http://via.placeholder.com/640x360';
    }

    public function getCreatedTimeAgoAttribute()
    {
        return ($this->created_at) ? $this->created_at->diffForHumans() : null;
    }

    public function getDateBlogFormatedAttribute()
    {
        return ($this->created_at) ? $this->created_at->format('M d, Y') : null;
    }

    public function category()
    {
        return $this->belongsTo('App\Models\Category', 'category_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id', 'id');
    }

    public function comments()
    {
        return $this->hasMany('App\Models\Comment', 'post_id', 'id');
    }
}
