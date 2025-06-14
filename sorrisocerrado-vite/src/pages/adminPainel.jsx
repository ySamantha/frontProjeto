import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import BarraNavegacao from '../componentes/barraNavegacao.jsx';
import Rodape from '../componentes/rodape.jsx';
import styles from './adminPainel.module.css';

function AdminPainel() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  const fetchProdutos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/produtos');
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  // buscar os produtos quando a página carrega
  useEffect(() => {
    fetchProdutos();
  }, []); 

  // Deletar um produto
  const handleExcluir = async (id) => {
    const confirmar = window.confirm("Tem certeza que deseja excluir este produto?");
    if (confirmar) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:3000/produtos/${id}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        alert('Produto excluído com sucesso!');
        fetchProdutos(); 
      } catch (error) {
        console.error("Erro ao excluir o produto:", error);
        alert('Falha ao excluir o produto.');
      }
    }
  };
  
  // Função de Logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Você foi desconectado.');
    navigate('/');
  };

  return (
    <div>
      <BarraNavegacao />
      <main className={styles.conteudoGeral}>
        <div className={styles.painelHeader}>
          <h2>Painel de Controle Administrativo</h2>
          <div>
            <Link to="/admin/adicionar-produto">
              <button className={styles.botaoAcao}>Adicionar Novo Produto</button>
            </Link>
          </div>
        </div>
        
        <table className={styles.tabelaAdmin}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map(produto => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
                <td>
                  <Link to={`/admin/editar-produto/${produto.id}`}>
                    <button className={styles.botaoAcao}>Editar</button>
                  </Link>
                  <button 
                    onClick={() => handleExcluir(produto.id)}
                    className={`${styles.botaoAcao} ${styles.botaoExcluir}`}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Rodape />
    </div>
  );
}

export default AdminPainel;