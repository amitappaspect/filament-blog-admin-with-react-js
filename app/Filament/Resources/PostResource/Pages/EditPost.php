<?php

namespace App\Filament\Resources\PostResource\Pages;

use App\Filament\Resources\PostResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;
use Filament\Forms;
use Auth;

class EditPost extends EditRecord
{
    protected static string $resource = PostResource::class;

    protected function getFormSchema(): array
    {
        return [
            Forms\Components\Grid::make()->schema([
                Forms\Components\Select::make('category')->relationship('category', 'name')->required(),
                Forms\Components\Select::make('user')->relationship('user', 'name')->required()
                ->hidden(fn () => Auth::user()->role!='admin'),
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

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
