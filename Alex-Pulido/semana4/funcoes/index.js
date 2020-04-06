// Exercicio - 1

// const minhaFuncao = (quantidade) => { 
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
// 			for(let j = 0; j < i; j++) {
// 				array.push(j)
// 			}
// 	}
//     return array
//}

//A - Resultado = [] - Vazio
//B - Resultado = (6) [0, 1, 0, 1, 2, 3]
//C - Resultado = (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

//Exercicio - 2

// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i
//     }
//   }
// }

// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));

// a. Explicite quais são as saídas impressas no console.
// Resposta: A saída é 0, 2 e undefined. Porque "Darvas" está na posição 0, "João" na posição 2 e "Paulinha" não foi encontrado

// b. O código funcionaria se a `lista` fosse um array de números (ao invés de um array de `string`)  e o `nome` fosse um número, ao se chamar a função? Justifique sua resposta.
// Resposta: Sim, funcionaria. Pois a função pesquisaria igualmente os números como se fosse nomes.

// Exercicio - 3

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// let arrayMsg=[]

// function metodo(array) {
//   let resultadoA = 0;
//   let resultadoB = 1;
//   let arrayFinal = [];

//   for (let x of array) {
//     resultadoA += x;
//     resultadoB *= x;
//   }

//   arrayFinal.push(resultadoA);
//   arrayFinal.push(resultadoB);
//   return arrayFinal;
// }

// arrayMsg = metodo(array);
// console.log(arrayMsg)

// Resposta: No resultado A ele soma os valores do array e insere no resultado. No resultado B ele multiplica ao invés de somar. 
// Eu sugiro o nome de "metodoSomaMultiplicacao"

// Exercicio - 4

// A - 

// function idadeCachorro(idade){
//     return idade * 7;
// }

// const idadeDog = (idadeCachorro)

// Console.log(idadeDog)

// B - 
const arrayPalavras = ["Goli", "23", "Rua Guarapari 190", "True"]
let dados = "";
function JuntaPalavras(nome, idade, endereco, estudante){
    for (let palavra of arrayPalavras)
        return dados + palavra + " ";


}

console.log(dados)



