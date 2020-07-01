export class Conta {
  private nome: string;
  private datanascimento: string;
  private cpf: string;
  private saldo: number = 0;
  private extrato: ItemExtrato[];

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

  public getCpf = (): string => this.cpf;
}

export class ItemExtrato {
  private descricao: string;
  private valor: number;
  private dataoper: string;

  constructor(newDescricao: string, newValor: number, newDataOper: string) {
    this.descricao = newDescricao;
    this.valor = newValor;
    this.dataoper = newDataOper;
  }
}
