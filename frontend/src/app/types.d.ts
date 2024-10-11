export interface Course {
    id: number;
    nombre_curso: string;
    profesor: string;
    aula: string;
    horario: string;
    estado: boolean;
}

export interface CourseInput {
    nombre_curso: string;
    profesor: string;
    aula: string;
    horario: string;
}