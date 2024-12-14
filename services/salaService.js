import { api } from './api'; // Importa la configuración de Axios

// Función para obtener todas las salas
export const obtenerSalas = async () => {
  try {
    const response = await api.get('/salas');
    return response.data; // Retorna los datos de las salas
  } catch (error) {
    console.error('Error al obtener salas:', error);
    throw error.response?.data || 'Error al obtener salas'; // Lanza el error para manejarlo en el componente
  }
};

// Función para agregar una nueva sala
export const agregarSala = async (ubicacion, estado) => {
  try {
    const response = await api.post('/salas', { ubicacion, estado });
    return response.data; // Retorna la sala creada
  } catch (error) {
    console.error('Error al agregar sala:', error);
    throw error.response?.data || 'Error al agregar sala';
  }
};

// Función para editar una sala existente
export const editarSala = async (id, ubicacion, estado) => {
  try {
    const response = await api.put(`/salas/${id}`, { ubicacion, estado });
    return response.data; // Retorna la sala actualizada
  } catch (error) {
    console.error('Error al editar sala:', error);
    throw error.response?.data || 'Error al editar sala';
  }
};

// Función para eliminar una sala
export const eliminarSala = async (id) => {
  try {
    const response = await api.delete(`/salas/${id}`);
    return response.data; // Retorna un mensaje de confirmación
  } catch (error) {
    console.error('Error al eliminar sala:', error);
    throw error.response?.data || 'Error al eliminar sala';
  }
};
export const reservarSala = async (id) => {
    try {
      const response = await api.post(`/reservas`, { salaId: id }); // Asegúrate de que tu API maneje esto
      return response.data; // Retorna el resultado de la reserva
    } catch (error) {
      console.error('Error al reservar sala:', error);
      throw error.response?.data || 'Error al reservar sala';
    }
  }; 