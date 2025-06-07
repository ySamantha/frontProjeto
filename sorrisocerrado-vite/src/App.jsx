import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Produtos from './pages/produtos';
import DetalheProduto from './pages/detalhesProduto'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produto/:id" element={<DetalheProduto />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;