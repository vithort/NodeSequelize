const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { User } = require('./app/models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Criar usuário:
//User.create({ name: 'Vithor', email: 'vtcarvalho@ftc.edu.br', password: '123456' });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

/*
app.get('/users', (req, res) => { }); //Listar todos
app.post('/users', (req, res) => { }); // Criar
app.get('/users/:id', (req, res) => { }); //Buscar
app.put('/users/:id', (req, res) => { }); //Editar
app.delete('/users/:id', (req, res) => { }); //Deletar
*/

app.post('/register', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

app.get('/find/:id', (req, res) => {
    res.json('Im in register');
});

app.get('/findall', (req, res) => {
    res.json('Im in Find All');
});

app.put('/update/:id', (req, res) => {
    res.json('Im in update');
});

app.delete('/delete/:id', (req, res) => {
    res.json('Im in delete');
});

app.listen(3000);