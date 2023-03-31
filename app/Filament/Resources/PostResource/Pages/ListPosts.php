<?php

namespace App\Filament\Resources\PostResource\Pages;

use App\Filament\Resources\PostResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;
use Closure;
use App\Models\Post;
use Illuminate\Database\Eloquent\Builder;

class ListPosts extends ListRecords
{
    protected static string $resource = PostResource::class;

    public function isTableSearchable(): bool
    {
        return true;
    }

    protected function applySearchToTableQuery(Builder $query): Builder
    {
        if (filled($searchQuery = $this->getTableSearchQuery())) {
            $query->whereIn('id', Post::search($searchQuery)->keys());
        }

        return $query;
    }

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    protected function getTableRecordActionUsing(): ?Closure
    {
        return null;
    }
}
