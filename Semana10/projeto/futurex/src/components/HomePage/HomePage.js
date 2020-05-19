import React from "react";

import Cabecalho from "../Cabecalho/Cabecalho";
import CartoesViagem from "../CartoesViagem/CartoesViagem";
import Rodape from "../Rodape/Rodape";
import LoginPage from "../LoginPage/LoginPage";
import GestaoPage from "../GestaoPage/GestaoPage";

function HomePage() {
  return (
    <div>
      <Cabecalho />
      <CartoesViagem />
      <LoginPage />
      <GestaoPage />
      <ListarViagemPage />
      <Rodape />
    </div>
  );
}

export default HomePage;
