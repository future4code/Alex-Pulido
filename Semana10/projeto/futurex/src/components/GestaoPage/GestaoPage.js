import React from "react";
import styled from "styled-components";

import CabecalhoLoginGerenciar from "../CabecalhoGerenciar/CabecalhoGerenciar";
import Rodape from "../Rodape/Rodape";

import { useHistory } from "react-router-dom";
import { useCadeadoPage } from "../Cadeado/Cadeado";

const ContainerGestao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 90%;
  margin: 100px auto 370px;
`;

const BotaoGestao = styled.button`
  width: 200px;
  height: 120px;
  font-size: 30px;
  border-radius: 5px;
  background-color: rgba(2, 2, 54, 0.7);
  color: white;
`;

function GestaoPage() {
  useCadeadoPage();

  const history = useHistory();

  const goToListarViagemPage = () => {
    history.push("/ListarViagem");
  };

  const goToCriarViagem = () => {
    history.push("/CriarViagem");
  };

  const goToGerenciarInscricoes = () => {
    history.push("/GerenciarInscricoes");
  };

  return (
    <div>
      <CabecalhoLoginGerenciar />
      <ContainerGestao>
        <BotaoGestao onClick={goToListarViagemPage}>Listar Viagens</BotaoGestao>
        <BotaoGestao onClick={goToCriarViagem}>Criar Viagem</BotaoGestao>
        <BotaoGestao onClick={goToGerenciarInscricoes}>
          Gerenciar Inscrições
        </BotaoGestao>
      </ContainerGestao>
      <Rodape />
    </div>
  );
}

export default GestaoPage;
