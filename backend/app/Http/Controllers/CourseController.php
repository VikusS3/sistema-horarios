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
        ]);

        $courses = Course::create($validatedData);
        return response()->json($courses, 201);
    }

    public function update(Request $request, $id)
    {
        $course = Course::find($id);
        if (is_null($course)) {
            return response()->json(['message' => 'Course not found'], 404);
        }

        $validatedData = $request->validate([
            'estado' => 'required | boolean'
        ]);

        $course->update($validatedData);

        return response()->json($course, 200);
    }

    public function destroy($id)
    {
        $course = Course::find($id);
        if (is_null($course)) {
            return response()->json(['message' => 'Course not found'], 404);
        }

        $course->delete();
        return response()->json(null, 204);
    }
}
