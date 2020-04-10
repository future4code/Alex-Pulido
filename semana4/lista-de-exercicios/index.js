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
const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283, 1, 99, 13, 31, 83, 131, 1, 1.1, -10, 25, 1590];

let numero1 = infinity;
let numero2 = 0;

for(let numero of numeros){
  if(numero < numero1){
    numero1 = numero;
  }
  
  if(numero > numero2){
    numero2 = numero;
  }
}

console.log(numero1);
console.log(numero2);