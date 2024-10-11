"use client";

import { useEffect, useState } from "react";
import api from "./lib/api";
import { Course, CourseInput } from "./types";

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [newCourse, setNewCourse] = useState<CourseInput>({
    nombre_curso: "",
    profesor: "",
    aula: "",
    horario: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCourse({
      ...newCourse,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.post("/courses", newCourse);
      setCourses([...courses, response.data]);
      setNewCourse({
        nombre_curso: "",
        profesor: "",
        aula: "",
        horario: "",
      });
    } catch (e) {
      console.error("Failed to create course", e);
    }
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get("/courses");
        setCourses(response.data);
      } catch (e) {
        console.error("Failed to fetch courses", e);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Cursos</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Nombre del Curso</th>
            <th className="px-4 py-2">Profesor</th>
            <th className="px-4 py-2">Aula</th>
            <th className="px-4 py-2">Horario</th>
            <th className="px-4 py-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr
              key={course.id}
              className={course.estado ? "bg-green-800" : "bg-red-800"} // Cambiar color según el estado
            >
              <td className="border px-4 py-2">{course.nombre_curso}</td>
              <td className="border px-4 py-2">{course.profesor}</td>
              <td className="border px-4 py-2">{course.aula}</td>
              <td className="border px-4 py-2">{course.horario}</td>
              <td className="border px-4 py-2">
                {course.estado ? "En curso" : "No iniciado"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-xl font-bold mt-8">Agregar nuevo curso</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Nombre del Curso</label>
          <input
            type="text"
            name="nombre_curso"
            value={newCourse.nombre_curso}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Profesor</label>
          <input
            type="text"
            name="profesor"
            value={newCourse.profesor}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Aula</label>
          <input
            type="text"
            name="aula"
            value={newCourse.aula}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Horario</label>
          <input
            type="text"
            name="horario"
            value={newCourse.horario}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Agregar Curso
        </button>
      </form>
    </div>
  );
}
