// src/components/ReservaCard.js
import React from 'react';

const ReservaCard = ({ reserva, onCancelar }) => {
  return (
    <div className="reserva-card">
      <h4>Reserva para: {reserva.sala}</h4>
      <p>Fecha: {reserva.fecha}</p>
      <p>Hora: {reserva.hora}</p>
      <button onClick={() => onCancelar(reserva.id)}>Cancelar Reserva</button>
    </div>
  );
};

export default ReservaCard;
