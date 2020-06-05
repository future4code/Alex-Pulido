import axios from "axios";

export const postLogin = async () => {
  const response = await axios.post(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-pulido-julian/login"
  );

  return response.data;
};
