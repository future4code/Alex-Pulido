import axios from "axios";

export const postInscricao = async (body) => {
  const response = await axios.post(
    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-pulido-julian/trips/${body.id}/apply`,
    body
  );
  console.log(response.data);
  return response.data;
};

export default postInscricao;
