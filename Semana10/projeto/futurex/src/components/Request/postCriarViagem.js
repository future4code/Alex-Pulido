import axios from "axios";

export const postCriarViagem = async (body) => {
  const response = await axios.post(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-pulido-julian/trips",
    body,
    {
      headers: {
        auth: localStorage.getItem("token"),
      },
    }
  );
  return response.data.trip;
};

export default postCriarViagem;
