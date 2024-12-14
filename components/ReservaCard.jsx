import React, { useState } from 'react';
import { format } from 'date-fns';

const ReservaCard = ({ reserva, onCancelar }) => {
  const [isCancelling, setIsCancelling] = useState(false); // Estado para indicar si se está procesando la cancelación

  // Función para manejar la cancelación con confirmación
  const handleCancel = async (idReserva) => {
    const confirmed = window.confirm('¿Estás seguro de que deseas cancelar esta reserva?');
    if (!confirmed) return;

    setIsCancelling(true); // Cambia el estado para deshabilitar el botón
    try {
      await onCancelar(idReserva); // Llama a la función onCancelar pasada como prop
    } finally {
      setIsCancelling(false); // Restaura el estado independientemente del resultado
    }
  };

  // Determina si la reserva es pasada o activa para aplicar clases dinámicas
  const isPast = new Date(reserva.fecha) < new Date();

  return (
    <div className={`reserva-card ${isPast ? 'past-reserva' : 'active-reserva'}`}>
      <h2>Sala: {reserva.sala.nombre}</h2>
      <p>Fecha: {format(new Date(reserva.fecha), 'dd/MM/yyyy')}</p>
      <p>Usuario: {reserva.usuario.nombre}</p>
      <button
        className="button cancel"
        onClick={() => handleCancel(reserva._id)}
        disabled={isCancelling} // Deshabilita el botón si se está procesando la cancelación
      >
        {isCancelling ? 'Cancelando...' : 'Cancelar Reserva'}
      </button>
    </div>
  );
};

export default ReservaCard;


