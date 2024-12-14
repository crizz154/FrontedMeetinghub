import axios from 'axios';

// Crea una instancia de Axios
export const api = axios.create({
  baseURL: 'http://localhost:3001', // Asegúrate de que esta URL sea la correcta para tu backend
  headers: {
    'Content-Type': 'application/json',
    // Aquí puedes agregar el Authorization header si necesitas enviar un token JWT
  },
});

// Interceptor para manejar errores globales
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo de errores global
    if (error.response) {
      console.error('Error en la respuesta:', error.response.data);
    }
    return Promise.reject(error);
  }
);
