<?php

namespace App\Http\Controllers;

use App\Models\WebPage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WebPagesController extends Controller
{
    public function index()
    {
        $webPages = WebPage::query()
                    ->where('user_id', Auth::user()->id)
                    ->get();
        return Inertia::render('WebPage/List/index', [
            'webPages' => $webPages
        ]);
    }
}
