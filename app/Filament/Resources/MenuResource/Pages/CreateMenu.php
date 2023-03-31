<?php

namespace App\Filament\Resources\MenuResource\Pages;

use App\Filament\Resources\MenuResource;
use Filament\Pages\Actions;
use Filament\Forms;
use Closure;
use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Filament\Resources\Pages\CreateRecord;

class CreateMenu extends CreateRecord
{
    protected static string $resource = MenuResource::class;

    protected function getFormSchema(): array
    {
        return [
            Forms\Components\Grid::make()->schema([
                Forms\Components\TextInput::make('menu_name')->required(),
                Forms\Components\Select::make('type')
                    ->options([
                        'category' => 'Category',
                        'post' => 'Post',
                        'author' => 'Author',
                    ])
                    ->default('category')
                    ->reactive()
                    ->required(),

                Forms\Components\Select::make('category')
                    ->options(Category::all()->pluck('name', 'slug'))
                    ->searchable()
                    ->hidden(fn (Closure $get) => $get('type') != 'category'),

                Forms\Components\Select::make('post')
                    ->options(Post::take(10)->get()->pluck('title', 'slug'))
                    ->searchable()
                    ->getSearchResultsUsing(fn (string $search) => Post::where('title', 'like', "%{$search}%")->limit(10)->pluck('title', 'slug'))
                    ->hidden(fn (Closure $get) => $get('type') != 'post'),

                Forms\Components\Select::make('author')
                    ->options(User::where('role', 'author')->take(10)->get()->pluck('name', 'id'))
                    ->searchable()
                    ->getSearchResultsUsing(fn (string $search) => User::where('name', 'like', "%{$search}%")->limit(10)->pluck('name', 'id'))
                    ->hidden(fn (Closure $get) => $get('type') != 'author'),

                Forms\Components\TextInput::make('icon'),
                Forms\Components\Select::make('status')
                    ->options([
                        'active' => 'Active',
                        'inactive' => 'Inactive',
                    ])
                    ->default('active')
                    ->required(),
            ])->columns(1),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['slug'] = $data[$data['type']];
        return $data;
    }
}
