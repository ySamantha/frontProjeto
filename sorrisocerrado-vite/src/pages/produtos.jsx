import React, { useState } from 'react';
import BarraNavegacao from '../componentes/barraNavegacao';
import Rodape from '../componentes/rodape';
import CartaoProduto from '../componentes/cards';
import { imagens } from '../imagens';
import '../App.css';

function Produtos() {
  const [listaDeProdutos] = useState([
    { id: 1, name: 'Vaso de Cerâmica ', price: 'R$ 75,00', imageUrl: imagens.colar },
    { id: 2, name: 'Colar de Sementes ', price: 'R$ 45,00', imageUrl: imagens.colar },
    { id: 3, name: 'Bolsa de Crochê', price: 'R$ 120,00', imageUrl: imagens.bolsa },
    { id: 4, name: 'Vaso de Garrafa ', price: 'R$ 35,00', imageUrl: imagens.bolsa }
  ]);

    const [termoDeBusca, setTermoDeBusca] = useState('');
    const produtosFiltrados = listaDeProdutos.filter(produto => 
        produto.name.toLowerCase().includes(termoDeBusca.toLowerCase())
    );

    return (
  <div>
    <BarraNavegacao />
    <main className="conteudo-geral" style={{ minHeight: '80vh', padding: '2rem' }}>
      <section className="secao-produtos-destaque">
        <h2>Nosso Catálogo</h2>
        <p style={{textAlign: 'center', marginBottom: '2rem'}}>Explore todos os nossos produtos feitos à mão com carinho.</p>
        
        <input 
          type="text"
          className="campo-busca"
          placeholder="Buscar por nome..."
          value={termoDeBusca}
          onChange={e => setTermoDeBusca(e.target.value)}
        />
        
        <div className="grade-produtos-destaque">
          {produtosFiltrados.map(produto => (
            <CartaoProduto key={produto.id} product={produto} />
            ))}
          </div>
        </section>
      </main>
      <Rodape />
    </div>
  );
}

export default Produtos;