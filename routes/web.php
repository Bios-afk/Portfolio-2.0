<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ContactController;
use Inertia\Inertia;

Route::get('/', [PageController::class, 'home'])->name('home');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::fallback(function () {
    return Inertia::render('not-found');
});

Route::get('/mentions-legales', function () {
    return Inertia::render('mentions-legales');
})->name('mentions-legales');
