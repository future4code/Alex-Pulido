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
         
