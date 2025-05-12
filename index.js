const express = require('express');

const app = express();

app.use(express.json())

app.get('/-', (req, res) => {
    res.send('Bem-vindo ao servidor Express!')
})

app.get('/sobre', (req, res) => {
    res.send('Este é um projeto de exemplo com rotas.')
})

app.get('/contato', (req, res) => {
    res.send('Entre em contato pelo e-mail: seuemail@email.com')
})

app.post('/usuario', (req, res) => {
    const nome = req.body.nome
    const cargo = req.body.cargo
    res.send('Usuário: ' + nome + '\nCom o cargo: ' + cargo + '\nCadastrado com sucesso!')
})

app.listen(3002, () => {
    console.log('Servidor rodando em: http://localhost:3002')
})
