import axios from "axios";

export const getTarefas = async () => {
  const response = await axios.get(
    "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-alex-pulido"
  );

  return response.data;
};
