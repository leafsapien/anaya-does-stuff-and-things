<?php

namespace App\Models;

use Database\Factories\BlogPostFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BlogPost extends Model
{
    /** @use HasFactory<BlogPostFactory> */
    use HasFactory;

    protected $fillable = ['user_id', 'title', 'slug', 'excerpt', 'content', 'featured_image_id', 'published_at'];

    // TODO - add featured_image_id to migration and factory
    protected $casts = [
        'published_at' => 'datetime',
    ];

    // public function page(): BelongsTo
    // {
    //     return $this->belongsTo(BlogPost::class, 'page_id');
    // }
}
