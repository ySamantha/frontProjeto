import React from 'react';
import '../App.css';

function Rodape() { 
  return (
    <footer className="rodape"> 
      <p>&copy; {new Date().getFullYear()} Sorriso do Cerrado. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Rodape;