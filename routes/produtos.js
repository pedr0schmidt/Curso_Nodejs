const express = require('express');

const router = express.Router();


//retorna todos os produtos
router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Retorna todos os produtos'
  });
});

//Insere um produto
router.post('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'insere um produto'
  })
});

//retorna os dados de um produto
router.get('/:id_produto', (req, res, next) => {
  const id = req.params.id_produto

  if (id === 'especial'){
    res.status(200).send({
      mensagem: 'Você descobriu o id especial',
      id: id
    });

  }   
    else {
      res.status(200).send({
        mensagem: 'Você passou um id '
      });

    }
});

// Altera um produto
router.patch('/:id_produtos', (req, res, next) =>{
  res.status(201).send({
    mensagem: 'Pedido alterado '
  })
});

//Deleta um produto
router.delete('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Produto excluido'
  })
})
// Basicamente o usuário poderá acessar e modificar e/ou acrescentar um produto
module.exports = router;
