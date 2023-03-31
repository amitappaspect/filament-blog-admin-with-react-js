<?php

namespace App\Filament\Resources\UserResource\Widgets;

use Filament\Widgets\Widget;
use App\Models\User;

class TotalUser extends Widget
{
    protected static string $view = 'filament.resources.user-resource.widgets.total-user';

    protected function getViewData(): array
    {
        return ['totalUser' => User::count()];
    }
}
