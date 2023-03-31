<?php

namespace App\Filament\Resources\CategoryResource\Pages;

use App\Filament\Resources\CategoryResource;
use Filament\Pages\Actions;
use App\Models\Category;
use Illuminate\Database\Eloquent\Builder;
use Filament\Resources\Pages\ListRecords;

class ListCategories extends ListRecords
{
    protected static string $resource = CategoryResource::class;

    public function isTableSearchable(): bool
    {
        return true;
    }

    protected function applySearchToTableQuery(Builder $query): Builder
    {
        if (filled($searchQuery = $this->getTableSearchQuery())) {
            $query->whereIn('id', Category::search($searchQuery)->keys());
        }

        return $query;
    }

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
