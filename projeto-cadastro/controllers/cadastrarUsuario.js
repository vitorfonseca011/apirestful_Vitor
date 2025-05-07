
function cadastrarUsuario(nome,idade) {
    if (!nome || !idade || idade <=0 || typeof(nome) != "string") {
        console.log('Erro: Nome ou idade inválidos') 
    } else {
    console.log('Usuário cadastrado com sucesso!')
    console.log('Nome: ' + nome)
    console.log('Idade: ' + idade)
    }
        
    } 

    

module.exports = cadastrarUsuario;


