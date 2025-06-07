import React from 'react';
import { Link } from 'react-router-dom';
import { imagens } from '../imagens';
import '../App.css'; 

function BarraNavegacao() { 
  return (
    <nav className="barra-navegacao"> 
      <Link to="/" className="logo-navegacao">
        <img src={imagens.logo} alt="Logo Sorriso do Cerrado" className="logo-imagem" />
        <span>Sorriso do Cerrado</span>
      </Link>
      
      <ul className="links-navegacao">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default BarraNavegacao;