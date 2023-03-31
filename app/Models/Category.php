<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Str;

class Category extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'name',
        'slug'
    ];

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    public function Posts()
    {
        return $this->hasMany('App\Models\Post');
    }
}
