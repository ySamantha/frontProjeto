import React, { useState } from 'react';
import BarraNavegacao from '../componentes/barraNavegacao'; 
import CartaoProduto from '../componentes/cards';
import Rodape from '../componentes/rodape';
import imagemDeFundoPrincipal from '../imagens/imagem-principal.jpg'; 
import imagemBolsa from '../imagens/produto-bolsa.jpg';
import imagemColar from '../imagens/produto-colar.jpg';

function Home() {
  const [featuredProducts] = useState([
    { id: 1, name: 'Vaso de Cerâmica', price: 'R$ 75,00' },
    { id: 2, name: 'Colar de Sementes', price: 'R$ 25,00', imageUrl: imagemColar },
    { id: 3, name: 'Bolsa', price: 'R$ 60,00', imageUrl: imagemBolsa },
  ]);

  return (
    <div className="container-pagina-inicial">
      <BarraNavegacao /> 
      <header className="secao-principal">
        <img src={imagemDeFundoPrincipal} alt="Artesanatos do Cerrado" className="imagem-principal" />
        <div className="conteudo-principal"></div>
      </header>
      
      <main className="conteudo-geral">
        <section className="secao-produtos-destaque">
          <h2>Produtos em Destaque</h2>
          <div className="grade-produtos-destaque">
            {featuredProducts.map(product => (
              <CartaoProduto key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Rodape />
    </div>
  );
}

export default Home;