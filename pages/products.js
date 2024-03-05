// pages/products.js
import React from 'react';

const Products = ({ products }) => {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>ID:</strong> {product.id}<br />
            <strong>Nome:</strong> {product.nome}<br />
            <strong>Quantidade:</strong> {product.quantidade}<br />
            <strong>Valor:</strong> R$ {product.valor}<br />
          </li>
        ))}
      </ul>
      <footer>
        <p>Assinatura: Vinicius Monteiro Orlandi</p>
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default Products;
