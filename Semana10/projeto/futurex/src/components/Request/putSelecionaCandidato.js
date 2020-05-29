import axios from "axios";

export const putSelecionaCandidato = async (body) => {
  console.log("valor aproved", body.approved);
  const response = await axios.put(
    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-pulido-julian/trips/${body.id}/candidates/${body.candidato}/decide`,
    body.approve,
    {
      headers: {
        auth: localStorage.getItem("token"),
      },
    }
  );
  return response.data.trip;
};

export default putSelecionaCandidato;
