import { api } from './api';

// Obtener todos los usuarios
export const getUsuarios = async () => {
  try {
    const response = await api.get('/usuarios');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error.response?.data || error.message);
    throw error;
  }
};

// Obtener un usuario por ID
export const getUsuarioById = async (id) => {
  try {
    const response = await api.get(`/usuarios/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el usuario:', error.response?.data || error.message);
    throw error;
  }
};

// Crear un nuevo usuario
export const crearUsuario = async (usuarioData) => {
  try {
    const response = await api.post('/usuarios', usuarioData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el usuario:', error.response?.data || error.message);
    throw error;
  }
};

// Actualizar un usuario
export const actualizarUsuario = async (id, usuarioData) => {
  try {
    const response = await api.put(`/usuarios/${id}`, usuarioData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el usuario:', error.response?.data || error.message);
    throw error;
  }
};

// Eliminar un usuario
export const eliminarUsuario = async (id) => {
  try {
    await api.delete(`/usuarios/${id}`);
  } catch (error) {
    console.error('Error al eliminar el usuario:', error.response?.data || error.message);
    throw error;
  }
};

// Iniciar sesión
export const login = async (credenciales) => {
  try {
    const response = await api.post('/usuarios/login', credenciales);
    return response.data; // Retorna el token
  } catch (error) {
    console.error('Error al iniciar sesión:', error.response?.data || error.message);
    throw error;
  }
};

// Registrar un nuevo usuario
export const register = async (usuarioData) => {
  try {
    const response = await api.post('/usuarios/registro', usuarioData);
    return response.data;
  } catch (error) {
    console.error('Error al registrar el usuario:', error.response?.data || error.message);
    throw error;
  }
};
