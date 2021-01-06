<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\WebPagesController;
use App\Models\WebPage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/web-pages');

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::group(['middleware' => ['auth']], function(){
    Route::get('/web-pages', [WebPagesController::class, 'index'])->name('web-pages');
    Route::get('/web-pages/add', [WebPagesController::class, 'add'])->name('web-pages-add');
    Route::get('/web-pages/view/{webPage}', [WebPagesController::class, 'view'])->name('web-pages-view');

    Route::post('/web-pages/preview', [WebPagesController::class, 'getPreviewData'])->name('web-pages-preview');
    Route::post('/web-pages/make-active', [WebPagesController::class, 'makeActive'])->name('web-pages-make-active');
});
