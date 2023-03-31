<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdsController extends Controller
{
    public function getAds()
    {
        return \App\Models\Ad::where('status', 'active')->get();
    }
}
