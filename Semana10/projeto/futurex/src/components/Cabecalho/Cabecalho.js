import React from "react";
import styled from "styled-components";
import ImgLogo from "../../img/Logo.png";

import { useHistory } from "react-router-dom";

const ContainerMenu = styled.div`
  display: flex;
  width: 90%;
  height: 8%;
  margin: 10px auto;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 200px;
  height: 100px;
  align-self: flex-start;
`;

const ContainerBotoes = styled.div`
  display: flex;
`;

const BotaoPrivado = styled.button`
  background-color: transparent;
  padding: 10px;
  width: 160px;
  height: 40px;
  color: #ffffff;
  text-transform: uppercase;
  border-style: none;
  border: solid 2px white;
  font-weight: bold;
  :hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

function Cabecalho() {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/Login");
  };

  return (
    <ContainerMenu>
      <Logo src={ImgLogo} />
      <ContainerBotoes>
        <BotaoPrivado onClick={goToLoginPage}>Privado</BotaoPrivado>
      </ContainerBotoes>
    </ContainerMenu>
  );
}

export default Cabecalho;
