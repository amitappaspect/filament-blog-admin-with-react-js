<?php

namespace App\Filament\Resources\PostResource\Pages;

use App\Filament\Resources\PostResource;
use Filament\Pages\Actions;
use Filament\Forms;
use Filament\Resources\Pages\CreateRecord;
use Auth;

class CreatePost extends CreateRecord
{
    protected static string $resource = PostResource::class;

    protected function getFormSchema(): array
    {
        return [
            Forms\Components\Grid::make()->schema([
                Forms\Components\Select::make('category')->relationship('category', 'name')->required(),
                Forms\Components\Select::make('user')->relationship('user', 'name')->required()
                ->hidden(fn () => !Auth::user()->isAdmin()),
                Forms\Components\TextInput::make('title')->required(),
                Forms\Components\RichEditor::make('description')->required(),
                Forms\Components\FileUpload::make('feature_image')->disk('public')->directory('posts')->visibility('public'),
                Forms\Components\Select::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'publish' => 'Publish',
                        'unpublish' => 'Unpublish',
                        'archive' => 'Archive',
                    ])
                    ->default('draft')
                    ->required(),
                Forms\Components\Toggle::make('is_featured')
            ])->columns(1),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
