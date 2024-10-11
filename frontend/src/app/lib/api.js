import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // URL del backend
  headers: {
    "Content-Type": "application/json", // Tipo de contenido JSON
  },
});

export default api;
