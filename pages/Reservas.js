// src/pages/Reservas.js
import React, { useEffect, useState } from 'react';
import { getReservas, cancelarReserva } from '../services/reservaService';
import ReservaCard from '../components/ReservaCard';

const Reservas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      const data = await getReservas();
      setReservas(data);
    };
    fetchReservas();
  }, []);

  const manejarCancelar = (id) => {
    cancelarReserva(id);
    setReservas(reservas.filter(reserva => reserva.id !== id));
  };

  return (
    <div>
      <h1>Reservas Activas</h1>
      <div className="reservas-lista">
        {reservas.map(reserva => (
          <ReservaCard key={reserva.id} reserva={reserva} onCancelar={manejarCancelar} />
        ))}
      </div>
    </div>
  );
};

export default Reservas;
