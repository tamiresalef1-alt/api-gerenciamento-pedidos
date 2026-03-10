📦 API de Gerenciamento de Pedidos - Desafio Jitterbit
Esta API foi desenvolvida em Node.js com Express como parte do teste técnico para a Jitterbit. O projeto realiza o gerenciamento de pedidos com transformação de dados (Mapping).

🚀 Funcionalidades (Endpoints)

Criar Pedido (POST /order): Recebe o JSON original e realiza o Mapping para o formato de destino.

Obter Pedido (GET /order/:orderId): Busca os dados de um pedido específico via parâmetro na URL.

Listar Pedidos (GET /order/list): Lista todos os pedidos armazenados em memória (Opcional).

🛠️ Tecnologias Utilizadas
Node.js: Ambiente de execução.
Express: Framework para criação das rotas da API.
Git/GitHub: Versionamento de código.

📋 Como rodar o projeto localmente
Clone este repositório:
bash
git clone https://github.com


Entre na pasta do projeto:
bash
cd Tamires.dev


Instale as dependências:
bash
npm install


Inicie o servidor:
bash
node index.js


**Entrada (JSON Original):**
```json
{ "numeroPedido": "v10089015vdb-01", "valorTotal": 10000, ... }

{ "orderId": "v10089016vdb", "value": 10000, ... }




A API estará disponível em: http://localhost:3000
Desenvolvido com 💜 por Tamires para o processo seletivo Professional Services.

Desenvolvido com 💜 por Tamires para o processo seletivo Professional Services.

