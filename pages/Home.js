import React, { useEffect, useState } from 'react';
import RoomCard from '../components/RoomCard';
import roomService from '../services/roomService';

const Home = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const data = await roomService.getRooms();
      setRooms(data);
    };
    fetchRooms();
  }, []);

  const handleReserve = (room) => {
    // Lógica para reservar la sala
    console.log(`Reservando sala: ${room.name}`);
  };

  return (
    <div className="container">
      <h1>Salas Disponibles</h1>
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} onReserve={handleReserve} />
      ))}
    </div>
  );
};

export default Home;
