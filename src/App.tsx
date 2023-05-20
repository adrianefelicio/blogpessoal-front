import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/estatico/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './componentes/estatico/footer/Footer';
import { Grid } from "@material-ui/core";
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/CadastroUsuario';


function App() {

  return(
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>  {/*altura mínima para o container, ou seja os elementos que estão nessa div ocuparão esse espaço */}
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro/>} />
        </Routes>
    </div>
    <Footer />
    </Router>
        );
}

export default App