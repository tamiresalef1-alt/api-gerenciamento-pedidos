const express = require('express');
const app = express();
app.use(express.json());

let pedidos = [
  { id: 1, cliente: "Tamires Dev", produto: "Curso de Node", status: "Pendente" }
];
let orders = [];

// Rota Raiz
app.get('/', (req, res) => {
  res.send('🏠 API da Tamires Online! Vá para /pedidos');
}); // <-- Faltava fechar aqui

// 1. Criar um novo pedido
app.post('/order', (req, res) => {
    const data = req.body;
    const mappedOrder = {
        orderId: data.numeroPedido,
        value: data.valorTotal,
        creationDate: new Date(data.dataCriacao).toISOString(),
        items: data.items.map(item => ({
            productId: parseInt(item.idItem),
            quantity: item.quantidadeItem,
            price: item.valorItem
        }))
    };
    orders.push(mappedOrder);
    res.status(201).json(mappedOrder);
});

// 2. Listar pedidos
app.get('/pedidos', (req, res) => {
  res.json(pedidos);
}); // <-- Faltava fechar aqui

// 3. Obter um pedido específico
app.get('/order/:orderId', (req, res) => {
    const order = orders.find(o => o.orderId === req.params.orderId);
    if (!order) return res.status(404).json({ error: "Pedido não encontrado" });
    res.json(order);
});

app.listen(3000, () => {
  console.log('🚀 Servidor turbinado em http://localhost:3000');
});
