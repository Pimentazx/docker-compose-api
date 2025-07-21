const express = require('express');
const pool = require('./db');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`API e banco conectados com sucesso! Hora atual: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao conectar ao banco');
  }
});

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});
