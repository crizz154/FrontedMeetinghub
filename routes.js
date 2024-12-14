// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Salas from './pages/Salas';
import Reservas from './pages/Reservas';
import Perfil from './pages/Perfil';
import Header from './components/Header';
import Footer from './components/Footer';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/salas" component={Salas} />
        <Route path="/reservas" component={Reservas} />
        <Route path="/perfil" component={Perfil} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
