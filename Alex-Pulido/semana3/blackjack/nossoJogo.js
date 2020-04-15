console.log("Bem vindo ao jogo de Blackjack!")
if(confirm("Quer iniciar uma rodada?")){
   const userA = comprarCarta(), userB=comprarCarta(), machA=comprarCarta(), machB=comprarCarta(), u=userA.valor+userB.valor, c=machA.valor+machB.valor;
   console.log("Usuário - cartas: "+userA.texto, userB.texto+" - pontuação "+u)
   console.log("Computador - cartas: "+machA.texto, machB.texto+" - pontuação "+c)
   if (u===c){
      console.log("Empate!")
   } else if(u>c){
      console.log("O usuário venceu!")
   } else{
      console.log("O Computador venceu!")
   }
} else {
   console.log("Fim de jogo")
}

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */