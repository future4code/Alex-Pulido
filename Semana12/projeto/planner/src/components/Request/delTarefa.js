import axios from "axios";

export const delTarefa = async (id) => {
  const response = await axios.delete(
    `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-alex-pulido/${id.id}`
  );

  return response.data;
};
