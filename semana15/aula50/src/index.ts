import { Client } from "./Client";

import { NewCep } from "./NewCep";
import { Residence } from "./Residence";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";
import { ResidencialClient } from "./ResidenceClient";
import { CommercialClient } from "./CommercialClient";
import { IndustrialClient } from "./IndustrialClient";

const client: Client = {
  name: "Alex",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  },
};

console.log(client, client.calculateBill());

const cep = new NewCep("07123-230");

console.log(cep);

const residence = new Residence(3, "07896-452");
console.log(residence);

const commerce = new Commerce(10, "08965-456");
console.log(commerce);

const industry = new Industry(200, "01152-045");
console.log(industry);

const clienteResidencial = new ResidencialClient(
  "Alex",
  1,
  10,
  "999.888.789-56",
  3,
  "09878-561"
);

console.log(clienteResidencial);
console.log(clienteResidencial.calculateBill());

const clienteComercial = new CommercialClient(
  "Davi",
  2,
  15,
  "333.333.333-88",
  10,
  "03879-985"
);
console.log(clienteComercial, clienteComercial.calculateBill());

const clienteIndustrial = new IndustrialClient(
  "Procrac",
  3,
  20,
  "98.985.454/9856-78",
  200,
  "96587-895"
);
console.log(clienteIndustrial, clienteIndustrial.calculateBill());
