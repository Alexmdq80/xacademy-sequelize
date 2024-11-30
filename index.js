const express = require('express');
const bodyParser = require( "body-parser");
const { initDb } = require("./db");
const User = require('./db/models/user.model')
const PORT = 8080;

const app = express();

app.use(bodyParser.json());

app.post("/user", async (req, res)=>{
    const { nombre, apellido, email } = req.body;
    try {
        const newUser = await User.create({ nombre, apellido, email});
        res.status(201).json(newUser);
    } catch(error) {
        res.status(500).send('Ocurrió un error');
    }
});

app.get("/user", async (req, res)=>{
    const users = await User.findAll();
    res.status(200).json(users);
});

app.get("/user/:userId", async (req, res)=>{});

app.put("/user/:userId", async (req, res)=>{});

app.delete("/user/:userId", async (req, res)=>{});

app.listen(PORT, async () => {
    await initDb();
    console.log(`Estoy escuchando peticiones en el puerto: ${PORT}`);
});
