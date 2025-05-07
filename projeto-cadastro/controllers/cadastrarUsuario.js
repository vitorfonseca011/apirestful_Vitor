
function validacao(nome,idade) {
    if (nome == "" || idade <= 0 ) {
        console.log('Nome e idade são obrigatórios para o cadastro!') 
    } else {
    console.log('Usuário cadastrado com sucesso!')
    console.log('Nome: ' + nome)
    console.log('Idade: ' + idade)
    }
        
    } 

    

module.exports = validacao;


