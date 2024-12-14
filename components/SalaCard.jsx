import React, { useEffect, useState } from 'react';
import { obtenerSalas, reservarSala } from './services/salaService'; // Asegúrate de tener esta función
import SalaCard from './components/SalaCard';

const SalaList = () => {
  const [salas, setSalas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSalas = async () => {
    try {
      const salasObtenidas = await obtenerSalas();
      setSalas(salasObtenidas);
    } catch (error) {
      setError('Error al obtener las salas');
      console.error('Error al obtener salas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReserve = async (room) => {
    try {
      await reservarSala(room._id); // Asegúrate de tener una función para reservar
      alert(`Sala ${room.name} reservada exitosamente!`);
      fetchSalas(); // Vuelve a obtener las salas para mostrar el estado actualizado
    } catch (error) {
      console.error('Error al reservar sala:', error);
      alert('Error al reservar la sala');
    }
  };

  useEffect(() => {
    fetchSalas();
  }, []);

  if (loading) return <p>Cargando salas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista de Salas</h1>
      <div className="room-list">
        {salas.map((room) => (
          <SalaCard key={room._id} room={room} onReserve={handleReserve} />
        ))}
      </div>
    </div>
  );
};

export default SalaList;
