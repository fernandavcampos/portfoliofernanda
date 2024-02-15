// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div>
   
    <h1><span className='nome'>Fernanda Vieira Campos</span></h1>
    <h2>Desenvolvedora <span className='texto'>Front-End</span></h2>
    <p>Confira meus projetos e entre em contato!</p>
    <Link to="/sobre-mim">Sobre Mim</Link>
    <Link to="/projetos">Meus projetos</Link>
    <Link to="/contatos">Meus contatos</Link>
    
  </div>
);

export default Home;
