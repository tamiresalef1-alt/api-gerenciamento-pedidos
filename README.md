🛒 Order Management Service (Mapping & API)
NodeJS Express JS
📌 Sobre o Projeto
Serviço de backend desenvolvido para processar e transformar objetos de pedidos. O foco principal foi a implementação de um Data Mapper, garantindo que dados externos sejam convertidos para o formato de negócio interno da aplicação de forma íntegra.

🛠️ Tecnologias e Padrões
Runtime: Node.js v20+
Framework: Express.js
Pattern: Data Transformation (Mapping)
DevTools: Postman para testes de integração
🗺️ Estrutura de Mapeamento (Data Mapping)
A API recebe um objeto "cru" e realiza a seguinte conversão:

Campo de Entrada	Campo de Saída	Transformação
numeroPedido	orderId	String ID
valorTotal	value	Number (Float)
dataCriacao	creationDate	ISO Date String
idItem	productId	Integer Conversion
🚀 Como Executar
Clone e instale as dependências:
git clone https://github.com
node index.js
🔌 Documentação da API (Endpoints) [POST] /order Cria um novo pedido aplicando a lógica de mapeamento. Request Body: { "numeroPedido": "2024-X", "valorTotal": 350.90, "dataCriacao": "2024-03-10", "items": [{ "idItem": "500", "quantidadeItem": 1, "valorItem": 350.90 }] } [GET] /pedidos Retorna todos os pedidos armazenados em memória. [GET] /order/:orderId Busca um pedido específico pelo identificador mapeado. 📫 Contato: tamiresalef1@gmail.com os npm install