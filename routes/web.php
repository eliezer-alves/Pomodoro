<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Dashboard', ['title' => 'teste']);
});

Route::get('/pomodoro', function () {
    return Inertia::render('Pomodoro', ['title' => '']);
});

Route::get('/about', function () {
    return Inertia::render('About', ['title' => '']);
});
