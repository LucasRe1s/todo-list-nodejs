const express = require('express');
const db = require('./db/db');
require('dotenv').config()

const app = express();

app.use(express.json())

app.listen(3000, console.log(`node rodando na porta }`));