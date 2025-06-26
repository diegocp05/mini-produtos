import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Camiseta React', price: 99.9 },
  { id: 2, name: 'Caneca JavaScript', price: 49.9 },
  { id: 3, name: 'Mouse Gamer', price: 199.9 }
];

const ProductList = () => {
  const [filtro, setFiltro] = useState('');
  const [ordem, setOrdem] = useState('az');

  const filtrados = products.filter(p =>
    p.name.toLowerCase().includes(filtro.toLowerCase())
  );

  const ordenados = [...filtrados].sort((a, b) => {
    return ordem === 'az'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  return (
    <div className="card">
      <h2>📦 Lista de Produtos</h2>

      <input
        type="text"
        placeholder="Filtrar por nome..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
        className="input"
      />

      <div className="btn-group">
        <button onClick={() => setOrdem('az')} className="btn">🔼 A-Z</button>
        <button onClick={() => setOrdem('za')} className="btn">🔽 Z-A</button>
      </div>

      <p className="info">Total exibido: {filtrados.length}</p>

      <ul className="product-list">
        {ordenados.length > 0 ? (
          ordenados.map(product => (
            <li key={product.id} className="product-item">
              <Link to={`/product/${product.id}`} className="link">
                {product.name} — R$ {product.price.toFixed(2)}
              </Link>
            </li>
          ))
        ) : (
          <li>Nenhum produto encontrado.</li>
        )}
      </ul>
    </div>
  );
};

export default ProductList;