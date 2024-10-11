<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::all();
        return response()->json($courses);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nombre_curso' => 'required|string',
            'profesor' => 'required|string',
            'aula' => 'required|string',
            'horario' => 'required',
            'estado' => 'required'
        ]);

        $courses = Course::create($validatedData);
        return response()->json($courses, 201);
    }
}
