// src/services/reservaService.js
import { api } from './api';

export const obtenerReservas = async () => {
  const response = await api.get('/reservas');
  return response.data;
};

export const cancelarReserva = async (id) => {
  await api.delete(`/reservas/${id}`);
};
export const obtenerReservaById = async (id) => {
    const response = await api.get(`/reservas/${id}`);
    return response.data;
  };
  
  // Crear una nueva reserva
export const crearReserva = async (reservaData) => {
    const response = await api.post('/reservas', reservaData);
    return response.data;
  };
  
  // Actualizar una reserva
export const actualizarReserva = async (id, reservaData) => {
    const response = await api.put(`/reservas/${id}`, reservaData);
    return response.data;
  };
  
