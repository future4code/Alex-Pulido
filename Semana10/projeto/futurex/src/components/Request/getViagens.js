import axios from "axios";

export const getViagens = async () => {
  const response = await axios.get(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-pulido-julian/trips"
  );

  return response.data.trips;
};
