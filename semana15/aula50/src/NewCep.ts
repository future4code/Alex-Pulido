import { Place } from "./Place";

export class NewCep extends Place {
  constructor(cep: string) {
    super(cep);
    this.cep = cep;
  }
}
