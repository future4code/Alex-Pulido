import axios from "axios";

export const postCriarTarefa = async (body) => {
  const response = await axios.post(
    "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-alex-pulido",
    body
  );
  return response.data.tarefa;
};

export default postCriarTarefa;
