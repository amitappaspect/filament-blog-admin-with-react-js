<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use Filament\Pages\Actions;
use Filament\Forms;
use Filament\Resources\Pages\CreateRecord;
use Hash;

class CreateUser extends CreateRecord
{
    protected static string $resource = UserResource::class;

    protected function getFormSchema(): array
    {
        return [
            Forms\Components\Grid::make()->schema([
                Forms\Components\TextInput::make('name')->required(),
                Forms\Components\TextInput::make('email')->email()->required(),
                Forms\Components\TextInput::make('password')->password()->nullable()->required(),
                Forms\Components\FileUpload::make('avatar')->disk('public')->directory('avatar')->visibility('public'),
                Forms\Components\Select::make('status')
                    ->options([
                        'active' => 'Active',
                        'inactive' => 'Inactive',
                    ]),
            ]),
            Forms\Components\Fieldset::make('Permissions')
            ->schema([
                Forms\Components\CheckboxList::make('permissions')
                ->label('Category')
                ->options([
                    'create_category' => 'Create Category',
                    'view_category' => 'View Category',
                    'edit_category' => 'Edit Category',
                    'delete_category' => 'Delete Category',
                ])->columns(4)->bulkToggleable(),
                    // POst fields
                Forms\Components\CheckboxList::make('permissions')
                ->label('Post')
                ->options([
                    'create_post' => 'Create Post',
                    'view_post' => 'View Post',
                    'edit_post' => 'Edit Post',
                    'delete_post' => 'Delete Post',
                ])->columns(4)->bulkToggleable()
            ])
            ->columns(1)
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['password'] = (Hash::needsRehash($data['password'])) ? Hash::make($data['password']) : $data['password'];

        return $data;
    }
}
