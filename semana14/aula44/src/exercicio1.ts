let minhaString: string = "Olá Mundo";

// minhaString = 10 - o VSCode reclama de erro.

let meuNumero: number = 10;

enum Cores {
  VIOLETA = "Violeta",
  ANIL = "Anil",
  AZUL = "Azul",
  VERDE = "Verde",
  AMARELO = "Amarelo",
  LARANJA = "Laranja",
  VERMELHO = "Vermelho",
}

type pessoa = {
  nome: string;
  idade: number;
  corFavorita: Cores;
};

const Alex: pessoa = {
  nome: "Alex",
  idade: 41,
  corFavorita: Cores.AZUL,
};

const Denise: pessoa = {
  nome: "Denise",
  idade: 42,
  corFavorita: Cores.VIOLETA,
};

const Davi: pessoa = {
  nome: "Davi",
  idade: 14,
  corFavorita: Cores.VERDE,
};
