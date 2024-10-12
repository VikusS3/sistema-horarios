<?php

use App\Http\Controllers\CourseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

//definir la ruta del csrf token
Route::get('/sanctum/csrf-cookie', CsrfCookieController::class);
// Route::middleware('auth:sanctum')->group(function () {
//     Route::post('/courses', [CourseController::class, 'store']);
//     Route::put('/courses/{id}', [CourseController::class, 'update']);
//     Route::delete('/courses/{id}', [CourseController::class, 'destroy']);
// });

Route::post('/courses', [CourseController::class, 'store']);
Route::put('/courses/{id}', [CourseController::class, 'update']);
Route::delete('/courses/{id}', [CourseController::class, 'destroy']);
Route::get('/courses', [CourseController::class, 'index']);
