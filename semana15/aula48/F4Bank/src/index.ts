import * as fs from "fs";
import moment from "moment";

import { Conta } from "./contas";

import { JSONFileManager } from "./JSONFileManager";

const newNome = process.argv[2];
const newDataNascimento = process.argv[3];
const nascimento = moment(newDataNascimento, "DD/MM/YYYY");
const today = moment();
const newCpf = process.argv[4];

const novaConta: Conta = new Conta(newNome, newDataNascimento, newCpf, []);
const idade = today.diff(nascimento, "years");

const validaIdade = () => {
  if (idade < 18) {
    console.log("Usuário não pode ser menor de idade!");
    return;
  }
};

validaIdade();

const fileManager: JSONFileManager = new JSONFileManager(
  "D:/Estudos/Future4/Alex-Pulido/semana15/aula48/F4Bank/src/users.json"
);
const listaConta: any = fileManager.getObjectFromFile();

const foundUser = listaConta.find((user: ))

console.log(listaConta);

// const validaCpf = listaConta.find(()) => {

// }

listaConta.push(novaConta);

fileManager.writeOnjectToFile(listaConta);
