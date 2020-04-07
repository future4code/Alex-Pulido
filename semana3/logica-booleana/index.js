// 1. Leia o código abaixo. Indique todas as mensagens impressas no console.

//         const bool1 = true
//         const bool2 = false
//         const bool3 = !bool2
        
//         let resultado = bool1 && bool2 && bool3
//         console.log("a. ", resultado)
// 		    Retorna o valor FALSE pois não são todas as variáveis que são TRUE
        
//         resultado = (bool2 || bool1) && !bool3
//         console.log("b. ", resultado)
// 		    Retorna o valor FALSE, pois um dos valores é FALSE
        
//         resultado = !resultado && (bool1 || bool1)
//         console.log("c. ", resultado)
		
        
//         resultado = (resultado && (!bool1 || bool2)) && !bool3
//         console.log("d. ", resultado)
        
//         console.log("e. ", typeof resultado)
// 		    A função typeof identifica o tipo do valor da variável.

// 2. Leia o código abaixo. 

        // let array
        // console.log('I. ', array)
        // R: Não foi declarado array.
        
        // array = null
        // console.log('II. ', array)
        // R: Array com valor nulo.
        
        
        // array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        // console.log('III. ', array.length)
        // R: A função .length identifica que no array existem 11 posições.
        
        // let i = 0
        // console.log('IV. ', array[i], " e ", array[i+1])
        // R: Mostra a primeira e segunda posição do array
        
        // array[i+1] = 19
        // const valor = array[i+6]
        // console.log('V. ', array[i+1], " e ", valor)
        // R: Mostra o valor atribuído 19 e a sexta posição do array.
        
        // i+=1
        // array[i] = array[i-1]
        // console.log('VI. ', array[i])
        // R: Soma 1 no valor de i e subtrai por 1, que resulta na posição 0.
        
        // i = array.length - 1
        // array[i] = array[i-3]
        // const resultadoC = array[i]%array[1]
        // console.log('VII. ', resultadoC)
        // R: Subtrai 1 da quantidade de posições sobra 10, depois subtrai 3 posições da decima posição, depois pega o resto da divisão.

    // a. O que é `array` e como se declara em `JS`?
	//     São maneiras de guardar e acessar mais de uma informação ao mesmo tempo.
	// 	    R: let array = [1, 2, 3]

    // b. Qual o index inicial de um `array`?
            // R: A primeira posição
	

    // c. Como se determinar o tamanho do `array`?
	//    R: Com a função .length

    // d. Indique todas as mensagens impressas no console.
        // R:  I.  undefined
        //     II.  null
        //     III.  11
        //     IV.  3  e  4
        //     V.  19  e  9
        //     VI.  3
        //     VII.  1


// kelvinA = (77 -32)*5/9 + 273.15
// console.log(kelvinA)

// fahrB = (80*9/5) + 32
// console.log(fahrB)

// fahrC = (30*9/5) + 32
// kelvinC = (30+273)
// console.log("O valor em Fahrenheit é "+fahrC+" e o valor em Kelvin é "+kelvinC)


// celsius = prompt("Qual a temperatura em Celsius?")
// resultCelsius = parseInt(celsius)
// fahrD = (celsius*9/5)+32
// KelvinD = (resultCelsius+273)
// console.log("O valor de "+celsius+" graus celsius em Fahrenheit é "+fahrD+" e em Kelvin é "+KelvinD)

// nome = prompt("Qual seu nome? ")
// idade = prompt("Qual a sua idade? ")
// sexo = prompt("Qual o seu sexo? ")
// pais = prompt("Mora em que pais? ")
// cidade = prompt("Mora em que cidade? ")
// console.log("Resposta: Nome: "+nome)
// console.log("Resposta: Idade: "+idade)
// console.log("Resposta: Sexo: "+sexo)
// console.log("Resposta: Pais:"+pais)
// console.log("Resposta: Cidade:"+cidade)

// valorConsumo = (280*0.05)
// console.log("Valor consumido é: "+valorConsumo)
// valorDesc = (valorConsumo*0.15)
// valorTotal = (valorConsumo-valorDesc)
// console.log("Valor do desconto é "+valorDesc+" então o valor total a pagar é: "+valorTotal)



