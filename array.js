const frutas = ['Maçã', 'Uva', 'Laranja']

console.log(frutas[1]) //Exibe: Uva
frutas.push('Abacate') //Adiciona um item no final do array

console.log(frutas)

frutas.pop(); //Remove o ultimo item da variavel
console.log(frutas)

//Tamanho do array
let numeros = [10, 20, 30, 40];
console.log(numeros.length); //4

//Filtra com base em condição 
let nomes = ['Ana', 'Beatriz', 'João','Carlos'];
let nomeFiltrado = nomes.filter(nome => nome == 'João');
console.log(nomeFiltrado)

let cores = ['Azul', 'Vermelho', 'Verde'];
cores.forEach(cor => {
    console.log('Cor: ', cor)
}); 
// Saída 
// cor: azul 
// cor: vermelho
// cor: verde