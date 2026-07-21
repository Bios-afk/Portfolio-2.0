<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

class Project extends Model
{
    protected $fillable = ['title', 'description', 'image', 'slug'];
    protected $appends = ['image_url'];
    /**
     * @return BelongsToMany<Stack, $this>
     */
    public function stacks(): BelongsToMany
    {
        return $this->belongsToMany(Stack::class);
    }

    /**
     * @return Attribute<string|null, never>
     */
    protected function imageUrl(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->image ? Storage::url($this->image) : null,
        );
    }
}
