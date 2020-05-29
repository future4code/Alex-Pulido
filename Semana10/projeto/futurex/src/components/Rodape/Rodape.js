import React from "react";
import styled from "styled-components";
import ImgLogo from "../../img/Logo.png";

const ContainerRodape = styled.div`
  display: flex;
  width: 90%;
  height: 7%;
  margin: 0px auto;
  margin-top: 50px;
  color: white;
  bottom: 0;
  position: relative;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100px;
  height: 50px;
  margin-right: 100px;
`;

const Direitos = styled.p`
  font-size: 10px;
  align-self: flex-end;
`;

function Rodape() {
  return (
    <ContainerRodape>
      <Logo src={ImgLogo} />
      <Direitos>
        Desenvolvido por AXP Tecnologia - Copyright &copy; 2020
      </Direitos>
    </ContainerRodape>
  );
}

export default Rodape;
