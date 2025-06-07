import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function CartaoProduto({ product }) { 
  return (
 
    <Link to={`/produto/${product.id}`} className="cartao-produto-link">
      <div className="cartao-produto"> 
        <img src={product.imageUrl} alt={product.name} className="cartao-produto-imagem" />
        <h3 className="cartao-produto-nome">{product.name}</h3>
        <p className="cartao-produto-preco">{product.price}</p>
      </div>
    </Link>
  );
}

export default CartaoProduto;