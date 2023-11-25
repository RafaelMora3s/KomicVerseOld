// configs/db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nome-do-seu-banco-de-dados', { useNewUrlParser: true, useUnifiedTopology: true });
