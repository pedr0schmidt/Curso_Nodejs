const express = require('express');

const router = express.Router();


//retorna todos os pedidos
router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando um get dento da rota de pedidos'
  });
});

//Insere um pedido
router.post('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Usando post dentro da rota de pedidos'
  })
});

//retorna os dados de um pedido
router.get('/:id_pedido', (req, res, next) => {
  const id = req.params.id_produto


    res.status(200).send({
      mensagem: 'Detalhes do pedido',
      id_pedido: id
    });
  });


//Deleta um produto
router.delete('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Peido excluido'
  })
})
// Basicamente o usuário poderá acessar e modificar e/ou acrescentar um produto
module.exports = router;
