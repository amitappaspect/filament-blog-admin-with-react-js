<?php

namespace App\Filament\Resources\PostResource\Widgets;

use Filament\Widgets\Widget;

class TotalPosts extends Widget
{
    protected static string $view = 'filament.resources.post-resource.widgets.total-posts';

    protected function getViewData(): array
    {
        return ['totalPosts' => \App\Models\Post::count()];
    }
}
