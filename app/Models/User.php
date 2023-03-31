<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Storage;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
        'role',
        'status',
        'permissions'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = [
        'avatar_url'
    ];

    public function setPermissionsAttribute($value)
    {
        $this->attributes['permissions'] = (is_array($value)) ? implode(',', $value) : null;
    }

    public function getPermissionsAttribute($value)
    {
        return explode(',', $value);
    }

    public function getAvatarUrlAttribute()
    {
        return ($this->avatar) ? Storage::url($this->avatar) : Storage::url('user.png');
    }

    public function isAdmin(): bool
    {
        return $this->role == 'admin';
    }
}
