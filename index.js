const express = require('express');
const app = express();
app.use(express.json());

let pedidos = [
  { id: 1, cliente: "Tamires Dev", produto: "Curso de Node", status: "Pendente" }
];

app.get('/', (req, res) => {
  res.send('🏠 API da Tamires Online! Vá para /pedidos');
});

app.get('/pedidos', (req, res) => {
  res.json(pedidos);
});

app.listen(3000, () => {
  console.log('🚀 Servidor turbinado em http://localhost:3000');
});

