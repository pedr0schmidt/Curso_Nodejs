const http = require('http');
const app = require('./app');


const port = process.env.PORT || 3000;
//setando uma porta padrão
const server = http.createServer(app); //crinado server
server.listen(port);


//passando para o server todo conteúdo exportado de app