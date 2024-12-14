import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import salas from './pages/Salas';
import Reservaciones from './pages/Reservas';
import Perfil from './pages/Perfil';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salas" element={<salas />} />
        <Route path="/reservas" element={<Reservaciones />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
