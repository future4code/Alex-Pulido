import * as fs from "fs";
import moment from "moment";

class ItemExtrato {
  descricao: string;
  valor: number;
  dataoper: string;

  constructor(newDescricao: string, newValor: number, newDataOper: string) {
    this.descricao = newDescricao;
    this.valor = newValor;
    this.dataoper = newDataOper;
  }
}

class Conta {
  nome: string;
  datanascimento: string;
  cpf: string;
  saldo: number = 0;
  extrato: ItemExtrato[];

  constructor(
    newNome: string,
    newDataNascimento: string,
    newCpf: string,
    newItemExtrato: ItemExtrato[]
  ) {
    this.nome = newNome;
    this.datanascimento = newDataNascimento;
    this.cpf = newCpf;
    this.extrato = newItemExtrato;
  }
}

const criarConta = (nome: string, dataNascimento: string, cpf: string) => {
  const date = moment(dataNascimento, "DD/MM/YYYY");
  const today = moment();
  const idade = today.diff(date, "years");

  if (idade < 18) {
    console.log("Usuário não pode ser menor de idade");
    return;
  }

  const caminhoArquivoUsuario =
    "D:/Estudos/Future4/Alex-Pulido/semana15/aula48/F4Bank/users.json";
  const arquivoUsuarios: Buffer = fs.readFileSync(caminhoArquivoUsuario);
  const stringUsuario = arquivoUsuarios.toString();

  const conta: Conta[] = JSON.parse(stringUsuario);

  const foundConta = conta.find((conta: Conta) => {
    return conta.cpf === cpf;
  });
  if (foundConta !== undefined) {
    console.log("O usuário já existe na base de dados!");
    return;
  }
  //Verifica se é um array
  // console.log(Array.isArray(usuarios))

  conta.push({
    nome: nome,
    datanascimento: dataNascimento,
    cpf: cpf,
    saldo: 0,
    extrato: [],
  });
  const contaStringfy = JSON.stringify(conta, null, 2);
  fs.writeFileSync(caminhoArquivoUsuario, contaStringfy);
};

const nome = process.argv[2];
const dataNascimento = process.argv[3];
const cpf = process.argv[4];

criarConta(nome, dataNascimento, cpf);
