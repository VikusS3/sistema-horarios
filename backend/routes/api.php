<?php

use App\Http\Controllers\CourseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/courses', [CourseController::class, 'index']);


// Route::middleware(['auth:sanctum'])->group(function () {
//     Route::delete('/courses/{course}', [CourseController::class, 'destroy']);
//     Route::put('/courses/{course}', [CourseController::class, 'update']);
//     Route::post('/courses', [CourseController::class, 'store']);
// });

Route::delete('/courses/{course}', [CourseController::class, 'destroy']);
Route::put('/courses/{course}', [CourseController::class, 'update']);
Route::post('/courses', [CourseController::class, 'store']);
