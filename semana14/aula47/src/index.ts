import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

//Exercicio 1

// A) - Endpoint GetSubscribers

// B) -

// C) - Implementação da função

async function getSubscribers(): Promise<any[]> {
  const users = await axios
    .get(`${baseUrl}/subscribers/all`)
    .then((response) => {
      console.log(`Subscribers: `, response);
    });
}

//Exercicio 2

// const getSubscribers = async (): Promise<any[]> => {
//   const users = await axios.get(`${baseUrl}/subscribers/all`);
//   return users.data;
// };

//Exercicio 3

//Exercicio 4

//Exercicio 5

//Exercicio 6

//Exercicio 7
