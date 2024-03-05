// pages/api/products.js
export default function handler(req, res) {
    const products = [
      { id: 1, nome: 'Produto 1', quantidade: 10, valor: 50 },
      { id: 2, nome: 'Produto 2', quantidade: 20, valor: 30 },
      { id: 3, nome: 'Produto 3', quantidade: 15, valor: 40 },
    ];
  
    res.status(200).json(products);
  }
  