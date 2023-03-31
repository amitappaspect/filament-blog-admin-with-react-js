<?php

namespace App\Filament\Resources\CategoryResource\Widgets;

use Filament\Widgets\Widget;

class TotalCategories extends Widget
{
    protected static string $view = 'filament.resources.category-resource.widgets.total-categories';

    protected function getViewData(): array
    {
        return ['totalCategories' => \App\Models\Category::count()];
    }
}
