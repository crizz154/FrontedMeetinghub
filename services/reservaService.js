// src/services/reservaService.js
import { api } from './api';

export const getReservas = async () => {
  const response = await api.get('/reservas');
  return response.data;
};

export const cancelarReserva = async (id) => {
  await api.delete(`/reservas/${id}`);
};
