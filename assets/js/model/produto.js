const express = require('express');
const db = require('./conexao');

const produtoRouter = express.Router();

produtoRouter.get('/', (req, res) => {
  db.query('SELECT * FROM produto', (err, results) => {
    if (err) {
      return res.status(500).send('Erro ao buscar dados');
    }
    res.json(results);
  });
});

produtoRouter.get('/:id', (req, res) => {
  const id = req.params.id;

  db.query('SELECT * FROM produto WHERE IDproduto = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).send('Erro ao buscar produto');
    }

    if (results.length === 0) {
      return res.status(404).send('Produto não encontrado');
    }

    res.json(results[0]);
  });
});

produtoRouter.post('/', (req, res) => {
  const { NomeProduto, ValorProduto, DescricaoProduto, ImgProduto } = req.body;

  if (!NomeProduto || !ValorProduto || !DescricaoProduto || !ImgProduto) {
    return res.status(400).send('Todos os campos são obrigatórios');
  }

  const sql = 'INSERT INTO produto (Nome, Preco, Descricao, Imagens) VALUES (?, ?, ?, ?)';
  const values = [NomeProduto, ValorProduto, DescricaoProduto, ImgProduto];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).send('Erro ao inserir dados');
    }
    res.status(201).send('Produto criado com sucesso');
  });
});

produtoRouter.put('/:id', (req, res) => {
  const id = req.params.id;
  const { NomeProduto, ValorProduto, DescricaoProduto, ImgProduto } = req.body;

  let updateFields = [];
  let values = [];

  if (NomeProduto) {
    updateFields.push('Nome = ?');
    values.push(NomeProduto);
  }
  if (ValorProduto) {
    updateFields.push('Preco = ?');
    values.push(ValorProduto);
  }
  if (DescricaoProduto) {
    updateFields.push('Descricao = ?');
    values.push(DescricaoProduto);
  }
  if (ImgProduto) {
    updateFields.push('Imagens = ?');
    values.push(ImgProduto);
  }

  if (updateFields.length === 0) {
    return res.status(400).send('Nenhum campo a ser atualizado');
  }

  values.push(id);

  const sql = `UPDATE produto SET ${updateFields.join(', ')} WHERE IDproduto = ?`;

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erro ao atualizar produto:', err);
      return res.status(500).send('Erro ao atualizar o produto');
    }

    if (result.affectedRows === 0) {
      return res.status(404).send('Produto não encontrado');
    }

    res.status(200).send('Produto atualizado com sucesso');
  });
});

produtoRouter.delete('/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'DELETE FROM produto WHERE IDproduto = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Erro ao apagar produto:', err);
      return res.status(500).send('Erro ao apagar produto');
    }

    if (result.affectedRows === 0) {
      return res.status(404).send('Produto não encontrado');
    }

    res.status(200).send('Produto apagado com sucesso');
  });
});

module.exports = produtoRouter;