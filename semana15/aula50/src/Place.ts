export abstract class Place {
  constructor(protected cep: string) {}

  public getCep(): string {
    return this.cep;
  }
}

// Se tentar criar uma instância dessa classe recebo erro informando que a
// classe é abstrata e não pode ser herdada
