// Exercicios de Leitura de Código

// Exercicio - 1
// - Variável meuDinheiro passa para a função conversorDeMoeda o valor de cotação 100.
// - Função de conversor de moeda, recebe parâmetro(valorEmDolar com valor 100).
// - Variável cotacao recebe valor digitado da cotação do dolar convertido para número.
// - Retorna o valor em Reais da cotação do dolar.
// - Exibe no console o valor da variável meuDinheiro.

// Exercico - 2
// - Variável novoMontante faz uma chamada à função investeDinheiro, passando os valores(tipoDeInvestimento="Ações" e valor=150)
// - É declarada a variável valorAposInvestimento.
// - A função de decisão SWITCH verifica qual tipo de investimento foi o informado(Nesse caso foi "Ações").
// - Na decisão "Ações" a variável valorAposInvestimento recebe o valor da multiplicação de valor(Informado na chamada da função(150)), multiplicado por 1.1.
// - Função retorna a variável valorAposInvestimento com o valor 165.
// - o valor da variável novoMontante é exibido no console.

// - Variável segundoMontante faz uma chamada à função investeDinheiro, passando os valores(tipoDeInvestimento="Tesouro Direto" e valor=200)
// - É declarada a variável valorAposInvestimento.
// - A função de decisão SWITCH verifica qual tipo de investimento foi o informado(Nesse caso foi "Tesouro Direto").
// - Não existe o tipoDeInvestimento "Tesouro Direto".
// - Nesse caso é emitido um ALERT com a mensagem "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"

// Exercicio - 3
// - É criada a variável numeros com o array de numeros.
// - É criada a variável array1 com array vazio.
// - É criada a variável array2 com array vazio.
// - No loop FOR é criada a variável numero de numeros.
// - Na condição IF o valor de numero é calculado com o operador binário % que retorna o inteiro restante da divisão, se o resto for igual a 0 
//   o valor da variável numero é inserido no array1, senão será inserido no array2.
// - Esse loop FOR é executado 14 vezes que é a quantidade de elementos da variável numeros.
// - No console será exibida a mensagem "Quantidade total de números 14", 14 é a quantidade de elementos na variável numeros.
// - No console será exibido o valor da variável array1, que será 6, ou seja, os números pares.
// - No console será exibido o valor da variável array2, que será 8, ou seja, os números ímpares.

// Exercicio - 4
// - Como não conhecia a propriedade Infinity tive que pesquisar e testar o seu uso e não consegui, o debug do Chrome retornou 
//    que não é possível definir a propriedade.

// Exercícios de lógica de programação

// Exercício - 1
// A - False
// B - True
// C - True
// D - True
// E - True

// const quantidadeDeNumerosPares = prompt("Digite a quantidade de numeros pares que deseja")
// let i = 0
// while(i <= quantidadeDeNumerosPares, i++) {
//     if(i % 2 ===0){ 
//         console.log(i*2);

//     }    

// }

// Exercício - 2
// O código não funciona, pois não foi inserido i++ para sempre incrementar 1 no valor de i, dessa forma o while
// fica em loop infinito.
// Também é necessário alterar o comparador <= para apenas <, senão sempre ele irá executar uma vez mais.

// const quantidadeDeNumerosPares = Number(prompt("Digite a quantidade de numeros"))

// let i = 0
// while(i < quantidadeDeNumerosPares) {
//     console.log(i*2)
//     i++
// }

// Exercicio - 3

// let l1 = prompt("Digite o lado A do triângulo")
// let l2 = prompt("Digite o lado B do triângulo")
// let l3 = prompt("Digite o lado C do triângulo")
// if       (l1 == l2 && l2 == l3 && l3 == l1){
//   console.log("Triangulo Equilatero");
// }else if (l1 == l2 || l2 == l3 || l3 == l1){
//   console.log("Triangulo Isosceles");
// }else if (l1 != l2 && l2 != l3 && l3 != l1){
//   console.log("Triangulo Escaleno");
// }

// Exercicio - 4
// const a = Number(prompt("Digite o valor de A"))
// const b = Number(prompt("Digite o valor de B"))
// let valor = 0
// if (a > b){
//     console.log("O maior é "+a)
//     valor = (a-b)
// }else if(a < b){
//     console.log("O maior é "+b)
//     valor = (b-a)
// }else if(a === b){
//     console.log("A e B são iguai")
// }
// let divisivel = (a/b)
// if (Number.isInteger(divisivel)){
//     console.log(a+" é divisivel por "+b)
// }else{
//     console.log(a+" não é divisivel por "+b)
// }
// divisivel = (b/a)
// if(Number.isInteger(divisivel)){
//     console.log(b+" é divisivel por "+a)
// }else{
//     console.log(b+" não é divisivel por "+a)
// }
// console.log("A diferença entre eles é "+valor)

// Exercicios de funções
// Exercicio - 1
// var numerosArray = [10, 1, 7, 4, 2, 3, 8, 15, 17, 6];

// function compararNumeros(a, b) {
//   return a - b;
// }

// console.log('Numeros do Array:', numerosArray.join());
// console.log('Ordenada sem função de comparação:', numerosArray.sort());
// console.log('Ordenada com compararNumeros:', numerosArray.sort(compararNumeros));

// let segundo = numerosArray[1];
// let penultimo = numerosArray[numerosArray.length - 2];
// console.log('O segundo valor do array é '+segundo+' o penúltimo valor do array é '+penultimo)

// Exercicio - 2

// var helloFuture4 = function() {console.log("Hello Future 4")}; 

// helloFuture4()

// Exercicios de objetos
// Exercicio - 1
// Array - São variáveis que podem gravar vários valores. Podemos/Devemos utilizar quando precisamos temos vários valores
//         e precisamos armazenar de forma rápida e prática.
// Objetos - Os objetos são uma coleção de propriedades. Eles nos possibilitam reutizar o objeto, armazenando objetos do mesmo
//             tipo, com variações de propriedade. 

// Exercio - 2
// function criaRetangulo(lado1, lado2){
//     let parametros = {
//         largura: lado1,
//         altura:  lado2,
//         perimetro: 2*(lado1 + lado2),
//         area: (lado1*lado2)
//       };
//       return parametros;
// }
// console.log(criaRetangulo(2,3))

// Exercicio - 3
// const filmeFavorito = {
//     titulo: "Forest Gump",
//     ano:  1994,
//     diretor: "Robert Zemeckis",
//     atores: ["Tom Hanks", "Robin Wright"]
// };

// console.log("Venha assistir ao filme "+filmeFavorito.titulo+", de "+filmeFavorito.ano+", dirigido por "+filmeFavorito.diretor+" e estrelando "+filmeFavorito.atores)

// Exercicio - 4
// const pessoa = {
//     nome: "Alex",
//     idade: 41,
//     email: "axp@axp.com",
//     endereco: "Rua Pirapora, 170"
// }
// function anonimizarPessoa() {
//     const pessoaAnonima = {
//         ...pessoa,
//         nome: "ANÔNIMO",
//         idade: 41,
//         email: "axp@axp.com",
//         endereco: "Rua Pirapora, 170"
//     }
// }
// console.log(anonimizarPessoa)

// Exercicios Aula Projeto Aula 16

// Exercicio - 1

// Listar o primeiro indice do array.
// Listar o último item do array.
// Listar todo o array.

// const arrayCarros = ["Civic", "Corola", "Uno", "Gol", "Corsa", "Fusca"]

// console.log("Mostra o primeiro carro do array "+arrayCarros[0]);
// console.log("Mostra o últmo carro do array "+arrayCarros[arrayCarros.length -1])

// arrayCarros.forEach(function (item, indice, arrayCarros){
//     console.log(item, indice);
// });

// Exercico - 2

// let arrayAdultos = []
// let arrayCriancas = []
// const pessoas = [
//     {nome: "Pedro", idade: 20 },
//     { nome: "João", idade: 10 },
//     { nome: "Paula", idade: 12 },
//     { nome: "Artur", idade: 89}
// ]

// function adultos (pessoas){
//     if(pessoas.idade>=20){
// 			arrayAdultos.push(pessoas)
// 	}else{
// 			arrayCriancas.push(pessoas)
// 	}
// }
// pessoas.forEach(adultos)
// console.log(arrayAdultos)
// console.log(arrayCriancas)

// exercico - 3 - Atividades A, B e C

// const array = [1, 2, 3, 4, 5, 6]
// let valorMultiplicadoPor2 = []
// let valorMultiplicadoPor3 = []
// let resultadoParOuImpar = []
// let resultado = 0

// function multiplicaPor2(item){
//     resultado = 2*item;
//     valorMultiplicadoPor2.push(resultado);
// }
// function multiplicaPor3(item){
//     resultado = 3*item;
//     valorMultiplicadoPor3.push(resultado);
// }
// function parOuImpar(item){
//     resultado = (item % 2);
//     if (resultado === 0){
//         resultadoParOuImpar.push(item+" é par, ")
//     }else{
//         resultadoParOuImpar.push(item+" é impar, ")
//     }
    
// }
// array.forEach(multiplicaPor2);
// array.forEach(multiplicaPor3);
// console.log(valorMultiplicadoPor2);
// console.log(valorMultiplicadoPor3);
// array.forEach(parOuImpar);
// console.log(resultadoParOuImpar);

// Exercico - 4

// let pessoasTem = [];
// let pessoasNao = [];
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]
// function temPermissao(item){
//     if((item.altura >= 1.5) && (item.idade > 14) && (item.idade < 60)){
//         pessoasTem.push(item);
//     }else{
//         pessoasNao.push(item);
//     }
// }
// pessoas.forEach(temPermissao);
// console.log(pessoasTem)
// console.log(pessoasNao)

// Exercício - 5

// let arrayCanceladas = []
// let arrayConfirmadas = []
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// function confirmaConsultas(consultas){
// 	if(consultas.cancelada===true){
// 		arrayCanceladas.push("Olá, Sr./Sra. "+consultas.nome+
// 		". Estamos enviando esta mensagem para lembrar da sua consulta no dia "+consultas.dataDaConsulta+
// 		". Por favor, acuse o recebimento deste email")
// 	}else{
// 		arrayCanceladas.push("Olá, "+consultas.nome+". Infelizmente, sua consulta marcada para o dia "
// 		+consultas.dataDaConsulta+" foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la")
// 	}
// }
// consultas.forEach(confirmaConsultas);
// console.log(arrayCanceladas)
// console.log(arrayConfirmadas)

// Exercício - 6

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo(contas){
	contas.compras.forEach(compras)
		let a = contas.saldoTotal - (contas.compras);
		contas.
}

contas.forEach(atualizaSaldo);
console.log(contas);