const express = require ("express")

const app = express()

app.use(express.json())

app.listen(3003, () => {
    console.log("O servidor http://localhost:3003 foi ligado")
})

app.post("/comprar", (req, res) => {
    const produto = req.body.produto
    const quantidade = req.body.quantidade
    const preco = req.body.preco
    const total =  req.body.preco * req.body.quantidade

    if (typeof(preco) != "number"|| typeof(quantidade) != "number"|| preco < 0 || quantidade < 0 || !produto)
        res.send('Dados inválidos')
    else 
        res.send('Produto: ' + produto + '\n Total: R$' + total)
    
})






