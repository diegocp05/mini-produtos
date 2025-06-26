import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Camiseta React',
    price: 99.9,
    description: 'Camiseta 100% algodão com estampa React.'
  },
  {
    id: 2,
    name: 'Caneca JavaScript',
    price: 49.9,
    description: 'Caneca personalizada com o logo do JS.'
  },
  {
    id: 3,
    name: 'Mouse Gamer',
    price: 199.9,
    description: 'Mouse com 8 botões e RGB personalizável.'
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [favorito, setFavorito] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="card">
        <h2>❌ Produto não encontrado!</h2>
        <button onClick={() => navigate('/')} className="btn">Voltar à lista</button>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>💰 Preço: <strong>R$ {product.price.toFixed(2)}</strong></p>
      <p>🎯 Promoção: <strong>R$ {(product.price * 0.9).toFixed(2)}</strong></p>

      <button onClick={() => setFavorito(!favorito)} className="btn">
        {favorito ? '💖 Favorito' : '🤍 Marcar como Favorito'}
      </button>

      <br /><br />
      <button onClick={() => navigate(-1)} className="btn btn-back">
        ← Voltar
      </button>
    </div>
  );
};

export default ProductDetail;