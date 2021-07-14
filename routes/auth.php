<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/login', function () {
    return Inertia::render('Auth/Login', ['title' => '']);
});
