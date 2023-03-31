<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostResource\Pages;
use App\Filament\Resources\PostResource\RelationManagers;
use App\Models\Post;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Tables\Filters;
use Auth;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PostResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static ?string $recordTitleAttribute = 'title';

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('feature_image'),
                Tables\Columns\TextColumn::make('title')->sortable()->wrap(),
                Tables\Columns\TextColumn::make('slug')->sortable()->wrap(),
                Tables\Columns\TextColumn::make('category.name')->sortable()->color('primary'),
                Tables\Columns\ViewColumn::make('user')->view('filament.tables.columns.user_with_image'),
                Tables\Columns\BadgeColumn::make('status')->colors([
                    'secondary' => 'draft',
                    'success' => 'publish',
                    'danger' => 'unpublish',
                    'warning' => 'archive'
                ])->sortable(),
                Tables\Columns\BadgeColumn::make('is_featured')
                ->colors([
                    'success' => 1,
                    'warning' => 0,
                ])
                ->formatStateUsing(fn (string $state): string => ($state==0) ? 'No' : 'Yes')->wrap()
            ])
            ->filters([
                Filters\SelectFilter::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'publish' => 'Published',
                        'unpublish' => 'Unpublish',
                        'archive' => 'Archive',
                    ]),
                Filters\SelectFilter::make('Author')
                    ->relationship('user', 'name'),
                Filters\SelectFilter::make('Category')
                    ->relationship('category', 'name')
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPosts::route('/'),
            'create' => Pages\CreatePost::route('/create'),
            'edit' => Pages\EditPost::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        if (!Auth()->user()->isAdmin()) {
            return parent::getEloquentQuery()->where('user_id', Auth::user()->id);
        } else {
            return parent::getEloquentQuery();
        }
    }
}
