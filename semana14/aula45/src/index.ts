import * as fs from "fs";

// Exercicio 1

// Exercicio A
// Passamos como parâmetro na linha de comando o "process.arg" a partir da posição 2

// Exercicio B

// const nome: string = String(process.argv[2]);
// const idade: number = Number(process.argv[3]);

// const mensagem: string = `Olá ${nome}!, Você tem ${idade} anos.`;

// console.log(mensagem);

// Exercicio C

// function somarIdade(a: number, b: number): number {
//   return a + b;
// }

// const nome: string = String(process.argv[2]);
// const idade: number = Number(process.argv[3]);
// const idadeMaisSete: number = 7;

// const mensagem: string = `Olá ${nome}!, Você tem ${idade} anos. Em sete anos você terá ${somarIdade(
//   idade,
//   idadeMaisSete
// )} anos.`;

// console.log(mensagem);

// Exercico 2

// function calcFuncao(operacao: string, a: number, b: number): any {
//   switch (operacao) {
//     case "add":
//       return a + b;
//       break;
//     case "sub":
//       return a - b;
//       break;
//     case "mult":
//       return a * b;
//       break;
//     case "div":
//       return a / b;
//       break;
//   }
// }

// const oper: string = String(process.argv[2]);
// const primeiroNumero: number = Number(process.argv[3]);
// const segundoNumero: number = Number(process.argv[4]);

// const retorno: string = `${oper} ${calcFuncao(
//   oper,
//   primeiroNumero,
//   segundoNumero
// )}`;

// console.log(retorno);

// Exercicio 3

const nomeArquivo: string = String(process.argv[2]);
const itemTarefa: string = String(process.argv[3]);

function editaLista(arquivo: string, item: string): any {
  fs.appendFileSync(arquivo, item);
}

const adicionaTarefa: string = `${editaLista(nomeArquivo, itemTarefa)}`;

console.log(adicionaTarefa);

// Exercicio aula 1

// function somar(a: number, b: number, c: number): number {
//   return a + b + c;
// }

// const primeiroNumero: number = Number(process.argv[2]);
// const segundoNumero: number = Number(process.argv[3]);
// const terceiroNumero: number = Number(process.argv[4]);

// const mensagem: string = `A soma dos números é ${somar(
//   primeiroNumero,
//   segundoNumero,
//   terceiroNumero
// )}`;

// console.log(mensagem);

// exercicio aula 2

// const data: any = fs.readFileSync("arquivoexec.json");
// const fileText: string = data.toString();
// const usuarios: any = JSON.parse(fileText);

// const listaUsuarios: any = usuarios.map((usuario: any) => {
//   return {
//     username: usuario.name,
//     name: usuario.main,
//   };
// });

// fs.writeFileSync("arquivoexec.json", "Olá Mundo");

// console.log(listaUsuarios);
