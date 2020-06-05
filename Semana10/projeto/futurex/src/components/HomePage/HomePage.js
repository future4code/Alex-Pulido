import React from "react";

import Cabecalho from "../Cabecalho/Cabecalho";
import CartoesViagem from "../CartoesViagem/CartoesViagem";
import Rodape from "../Rodape/Rodape";

function HomePage() {
  return (
    <div>
      <Cabecalho />
      <CartoesViagem />
      <Rodape />
    </div>
  );
}

export default HomePage;
