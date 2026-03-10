const express = require('express');
const app = express();
app.use(express.json());

// Banco de dados temporário
let orders = [];

// 1. Criar um novo pedido (OBRIGATÓRIO) com Mapping
app.post('/order', (req, res) => {
    const data = req.body;
    
    // Fazendo a transformação dos dados (Mapping) exigida no PDF
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
    console.log("✅ Pedido recebido e transformado!");
    res.status(201).json(mappedOrder);
});

// 2. Obter dados de UM pedido específico (OBRIGATÓRIO)
app.get('/order/:orderId', (req, res) => {
    const order = orders.find(o => o.orderId === req.params.orderId);
    if (!order) return res.status(404).json({ error: "Pedido não encontrado" });
    res.json(order);
});

// 3. Listar todos os pedidos (OPCIONAL - conta pontos!)
app.get('/order/list', (req, res) => {
    res.json(orders);
});

app.listen(3000, () => {
    console.log('🚀 API Jitterbit rodando em http://localhost:3000');
});
