// a. Seria possível imprimir a senha (password) atrelada a essa instância?
// R: Não, pois não foi implementado o geter

// b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
//R:

import { User } from "./User";
import { Customer } from "./Customer";

const userInstance: User = new User(
  "1",
  "astrodev@labenu.com.br",
  "Astrodev",
  "123456"
);

console.log("UserId: ", userInstance.getId());
console.log("UserName", userInstance.getName());
console.log("UserEmail", userInstance.getEmail());

const customerInstance: Customer = new Customer(
  "2",
  "alex@labenu.com",
  "Alex",
  "159845",
  "896521478"
);

console.log(customerInstance);
