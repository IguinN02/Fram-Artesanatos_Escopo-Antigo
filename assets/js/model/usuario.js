const express = require('express');
const db = require('./conexao');

const usuarioRouter = express.Router();

usuarioRouter.get('/', (req, res) => {
  db.query('SELECT * FROM usuario', (err, results) => {
    if (err) {
      res.status(500).send('Erro ao buscar dados');
    } else {
      res.json(results);
    }
  });
});

usuarioRouter.post('/', (req, res) => {
  const { Nome, Email, Telefone, Senha } = req.body;

  if (!Nome || !Email || !Telefone || !Senha) {
    return res.status(400).send('Todos os campos são obrigatórios');
  }

  db.query('SELECT * FROM usuario WHERE Email = ?', [Email], (err, results) => {
    if (err) {
      console.error('Erro ao verificar e-mail:', err);
      return res.status(500).send('Erro ao verificar e-mail');
    }

    if (results.length > 0) {
      return res.status(402).send('E-mail já está em uso');
    }

    db.query('SELECT * FROM usuario WHERE Telefone = ?', [Telefone], (err, results) => {
      if (err) {
        console.error('Erro ao verificar telefone:', err);
        return res.status(500).send('Erro ao verificar telefone');
      }

      if (results.length > 0) {
        return res.status(403).send('Telefone já está em uso');
      }

      const sql = 'INSERT INTO usuario (Email, Nome, Senha, Telefone) VALUES (?, ?, ?, ?)';
      const values = [Email, Nome, Senha, Telefone];

      db.query(sql, values, (err, results) => {
        if (err) {
          console.error('Erro ao inserir dados:', err);
          return res.status(500).send('Erro ao inserir dados');
        }
        res.status(201).json({ message: "Usuário criado com sucesso" });
      });
    });
  });
});

module.exports = usuarioRouter;