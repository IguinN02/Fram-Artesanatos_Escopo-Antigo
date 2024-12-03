const express = require('express');
const cors = require('cors');
const usuarioRouter = require('./usuario');
const produtoRouter = require('./produto');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/usuario', usuarioRouter);
app.use('/produto', produtoRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});