import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/api", // URL del backend
  headers: {
    "Content-Type": "application/json", // Tipo de contenido JSON
    Accept: "application/json", // Tipo de contenido JSON
  },
  withCredentials: true, // Enviar cookies
  withXSRFToken: true, // Enviar token CSRF
});
