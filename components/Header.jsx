import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Reserva de Salas</h1>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/rooms">Salas</Link> | <Link to="/reservations">Reservas</Link> | <Link to="/profile">Perfil</Link>
      </nav>
    </header>
  );
};

export default Header;
