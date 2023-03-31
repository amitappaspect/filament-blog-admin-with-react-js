<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Storage;

class Ad extends Model
{
    use HasFactory;

    protected $fillable = [
        'ad_title',
        'ad_description',
        'ad_size',
        'ad_image',
        'ad_link',
        'ad_open_in_new_tab',
        'expire_on',
        'ad_place',
        'status',
    ];

    protected $appends = ['ad_image_url'];

    public function getAdImageUrlAttribute()
    {
        return ($this->ad_image) ? Storage::url($this->ad_image) : null;
    }
}
