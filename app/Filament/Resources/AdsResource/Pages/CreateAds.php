<?php

namespace App\Filament\Resources\AdsResource\Pages;

use App\Filament\Resources\AdsResource;
use Filament\Pages\Actions;
use Filament\Resources\Form;
use Filament\Forms;
use Filament\Resources\Pages\CreateRecord;

class CreateAds extends CreateRecord
{
    protected static string $resource = AdsResource::class;

    protected function getFormSchema(): array
    {
        return [
            Forms\Components\Grid::make()->schema([
                Forms\Components\TextInput::make('ad_title')->required(),
                Forms\Components\TextInput::make('ad_description')->required(),
                Forms\Components\Select::make('ad_size')
                    ->options([
                        '468x60' => '468 x 60 (banner)',
                        '728x90' => '728 x 90 (leaderboard banner)',
                        '250x250' => '250 x 250 (square)',
                        '120x600' => '120 x 600 (skyscraper)',
                        '320x50' => '320 x 50 (mobile leaderboard)',
                    ])
                    ->default('468x60')
                    ->required(),
                Forms\Components\TextInput::make('ad_link')->url()->required(),
                Forms\Components\DatePicker::make('expire_on')->minDate(now())->required(),
                Forms\Components\Select::make('ad_place')
                    ->options([
                        'header' => 'Header',
                        'footer' => 'Footer',
                        'left_sidebar' => 'Left sidebar',
                        'right_sidebar' => 'Right Sidebar',
                        'betwin_list' => 'Betwin List',
                        'detail_page' => 'Detail Page',
                    ])
                    ->default('header')
                    ->required(),
                Forms\Components\FileUpload::make('ad_image')->disk('public')->directory('ad_images')->visibility('public'),
                Forms\Components\Select::make('status')
                    ->options([
                        'active' => 'Active',
                        'inactive' => 'Inactive',
                    ])
                    ->default('active')
                    ->required(),
                Forms\Components\Toggle::make('ad_open_in_new_tab')
            ])->columns(2),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
