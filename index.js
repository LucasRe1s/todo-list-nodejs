const express = require('express');
const { UUIDV1 } = require('sequelize');
// const db = require('./db/db');
require('dotenv').config()

const app = express();

app.use(express.json())
const data = [];

app.get("/task", (req, res) => {
    console.log(data)
    // res.json({msg: "retornando db." + data})
    res.json({data})
})


app.post("/task", (req, res) => {

    const id = UUIDV1;
    const task = req.body;

    data.push(task + id);
    res.json({msg: "tarefa adicionada"})
    console.log(`${task}, ${id}`)
})
const PORT = 3000;
app.listen(PORT || 3000, ()=> {
    console.log(`node rodando na porta ${PORT}`)
});
