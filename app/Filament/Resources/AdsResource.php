<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AdsResource\Pages;
use App\Filament\Resources\AdsResource\RelationManagers;
use App\Models\Ad;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Forms\Components\Toggle;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AdsResource extends Resource
{
    protected static ?string $model = Ad::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

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
                Tables\Columns\ImageColumn::make('ad_image'),
                Tables\Columns\TextColumn::make('ad_title')->sortable()->wrap(),
                Tables\Columns\TextColumn::make('ad_description')->sortable()->wrap(),
                Tables\Columns\TextColumn::make('ad_size')->sortable()->wrap(),
                Tables\Columns\TextColumn::make('ad_link')->sortable()->wrap(),
                Tables\Columns\TextColumn::make('expire_on')->sortable()->since(),
                Tables\Columns\TextColumn::make('ad_place')->sortable()->wrap(),
                Tables\Columns\BadgeColumn::make('ad_open_in_new_tab')
                ->colors([
                    'success' => 1,
                    'warning' => 0,
                ])
                ->formatStateUsing(fn (string $state): string => ($state==0) ? 'No' : 'Yes')
                ->sortable()->wrap(),
                Tables\Columns\BadgeColumn::make('status')->colors([
                    'success' => 'active',
                    'danger' => 'inactive',
                ])->sortable()->wrap(),
            ])
            ->filters([
                //
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
            'index' => Pages\ListAds::route('/'),
            'create' => Pages\CreateAds::route('/create'),
            'edit' => Pages\EditAds::route('/{record}/edit'),
        ];
    }
}
