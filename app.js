const express = require('express');
const app = express();
const morgan = require('morgan')

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
//O morgan monitora toda a execução e nos retorna os logs
app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

//Caso a rota não seja encontrada 
app.use((req, res, next) => {
  const erro = new Error('Não encontrado');
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
      erro: {
        mensagem: error.message
      }
    });
});



module.exports = app;

 