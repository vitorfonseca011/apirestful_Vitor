const express = require('express')

const app = express();

app.use(express.json())

app.listen(3000,() =>{
    console.log("Servidor Express rodando em http://localhost:3000")
})

const produtos = [] 

app.get('/produtos', (req, res) => {
    res.status(200).send(produtos)
})

app.post('/produtos', (req, res) => {
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco,
        quantidade: req.body.quantidade
    }  

    if (!produto.nome || typeof produto.nome != 'string' || produto.nome.trim() == '') {
        return res.status(400).send('Nome do produto é obrigatório e deve ser uma string não vazia.');
    }

    if (produto.preco == undefined || typeof produto.preco != 'number' || produto.preco <=0) {
        return res.status(400).send('Preço deve ser um número positivo.');
    }

    if (produto.quantidade == undefined || !Number.isInteger(produto.quantidade) || produto.quantidade < 0) {
        return res.status(400).send('Quantidade deve ser um número inteiro maior que 0.')
    }

    produtos.push(produto)  
 
    res.status(201).send('Produto cadastrado com sucesso!')
}) 




