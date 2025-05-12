const express = require('express');

const app = express();

app.get('/-', (req, res) => {
    res.send('Bem-vindo ao servidor Express!')
})

app.get('/sobre', (req, res) => {
    res.send('Este é um projeto de exemplo com rotas.')
})

app.get('/contato', (req, res) => {
    res.send('Entre em contato pelo e-mail: seuemail@email.com')
})

app.listen(3002, () => {
    console.log('Servidor rodando em: http://localhost:3002')
})
