// app.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurações
require('./Configs/db');

app.use(express.json());

// Rotas
app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});