<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = [
        'menu_name',
        'type',
        'slug',
        'icon',
        'order',
        'status',
    ];

    protected $appends = [
        'slug_name'
    ];

    public function getSlugNameAttribute()
    {
        switch ($this->type) {
            case 'category':
                return ($this->category) ? $this->category->name : null;
                break;
            case 'post':
                return ($this->post) ? $this->post->title : null;
                break;
            case 'author':
                return ($this->author) ? $this->author->name : null;
                break;
            default:
                return null;
                break;
        }
    }

    public function category()
    {
        return $this->belongsTo('App\Models\Category', 'slug', 'slug');
    }

    public function post()
    {
        return $this->belongsTo('App\Models\Post', 'slug', 'slug');
    }

    public function author()
    {
        return $this->belongsTo('App\Models\User', 'slug', 'id');
    }
}
