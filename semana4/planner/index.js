

// function criarTarefa(){
//     novaTask = document.getElementById("novaTask").value;
//     if (novaTask ===""){
//         alert("É necessário digitar a tarefa para inserir!")
//     }   else{
//         const diaDaSemana = document.getElementById("diaDaSemana").value;
        
//         switch (diaDaSemana){
//         case 'segunda':
//             document.getElementById("segunda").innerHTML +="<li>"+novaTask+"</li>";
//             document.getElementById("novaTask").value = "";
//             break;
//        case 'terca':
//             document.getElementById("terca").innerHTML +="<li>"+novaTask+"</li>";
//             document.getElementById("novaTask").value = "";
//             break;
//        case 'quarta':
//             document.getElementById("quarta").innerHTML +="<li>"+novaTask+"</li>";
//             document.getElementById("novaTask").value = "";
//             break;
//         case 'quinta':
//             document.getElementById("quinta").innerHTML +="<li>"+novaTask+"</li>";
//             document.getElementById("novaTask").value = "";
//         break;
//         case 'sexta':
//             document.getElementById("sexta").innerHTML +="<li>"+novaTask+"</li>";
//             document.getElementById("novaTask").value = "";
//         break;
//         case 'sabado':
//             document.getElementById("sabado").innerHTML +="<li>"+novaTask+"</li>";
//             document.getElementById("novaTask").value = "";
//         break;
//         default:
//             document.getElementById("domingo").innerHTML +="<li>"+novaTask+"</li>";
//             document.getElementById("novaTask").value = "";
//         break;
//         }
//     }
// }

let novaLista = [1, 3, 5, 8]
    let i = 0
    while (i < novaLista.length) {
      let novoItem = "O elemento " + i.toString() + " é "
      novoItem += array[i].toString()
      novaLista.push(novoItem)
      i++
    }