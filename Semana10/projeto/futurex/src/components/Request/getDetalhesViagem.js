import axios from "axios";

export const getDetalhesViagem = async (id) => {
  const response = await axios.get(
    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-pulido-julian/trip/${id}`,
    {
      headers: {
        auth: localStorage.getItem("token"),
      },
    }
  );
  return response.data.trip;
};

export default getDetalhesViagem;
