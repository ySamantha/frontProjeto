import React from 'react';
import { useParams } from 'react-router-dom';
import BarraNavegacao from '../componentes/barraNavegacao';
import Rodape from '../componentes/rodape';
import { imagens } from '../imagens';
import '../App.css';

const todosOsProdutos = [
    { id: '1', name: 'Vaso de Cerâmica', price: 'R$ 75,00', imageUrl: imagens.vaso, description: 'Um lindo vaso de cerâmica pintado à mão, perfeito para decorar qualquer ambiente.' },
    { id: '2', name: 'Colar de Sementes', price: 'R$ 45,00', imageUrl: imagens.colar, description: 'Colar exclusivo feito com sementes nativas do Cerrado.' },
    { id: '3', name: 'Bolsa de Crochê', price: 'R$ 120,00', imageUrl: imagens.bolsa, description: 'Bolsa de crochê feita com fio de algodão, perfeita para o dia a dia.' },
    { id: '4', name: 'Vaso de Garrafa', price: 'R$ 35,00', imageUrl: imagens.vaso, description: 'Decoração sustentável, este vaso foi feito com itens reutilizáveis.' },
];

function DetalheProduto() {
  const { id } = useParams();
  const produto = todosOsProdutos.find(p => p.id === id);

  if (!produto) {
    return (
      <div>
        <BarraNavegacao />
        <main className="conteudo-geral" style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Produto não encontrado!</h2>
        </main>
        <Rodape />
      </div>
    );
  }

  return (
    <div>
      <BarraNavegacao />
      <main className="conteudo-geral">
        <div className="detalhe-produto-container">
          <img src={produto.imageUrl} alt={produto.name} className="detalhe-produto-imagem" />
          <div className="detalhe-produto-info">
            <h1>{produto.name}</h1>
            <p className="detalhe-produto-preco">{produto.price}</p>
            <p className="detalhe-produto-descricao">{produto.description}</p>
            <button className="botao-comprar">Adicionar ao Carrinho</button>
          </div>
        </div>
      </main>
      <Rodape />
    </div>
  );
}

export default DetalheProduto;