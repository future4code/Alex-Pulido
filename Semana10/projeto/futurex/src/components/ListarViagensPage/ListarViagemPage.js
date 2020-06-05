import React, { useState, useEffect } from "react";

import styled from "styled-components";
import ImagemCartao from "../../img/planeta.jpg";
import { getViagens } from "../Request/getViagens";
import CabecalhoGerenciar from "../CabecalhoGerenciar/CabecalhoGerenciar";
import Rodape from "../Rodape/Rodape";
import { useCadeadoPage } from "../Cadeado/Cadeado";

const ContainerLista = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

const CardLista = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  height: 170px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 10px auto;
  border-radius: 5px;
`;

const ImgCartao = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 150px;
  margin: 10px;
`;

const DetalhesViagem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 565px;
  height: 150px;
  background-color: rgba(2, 2, 54, 0.7);
  border-radius: 5px;
  margin-top: 1px;
  margin-left: 5px;
  color: white;
  font-size: 12px;
`;

const FormataTexto = styled.p`
  margin: 5px 0px 5px 5px;
  font-size: 15px;
`;

function ListarViagem() {
  useCadeadoPage();
  const [listaViagem, setListaViagem] = useState([]);

  const carregaViagens = () => {
    getViagens()
      .then((trips) => {
        console.log("Get Lista Viagem", trips);
        setListaViagem(trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    carregaViagens();
  }, []);

  return (
    <div>
      <CabecalhoGerenciar />
      <ContainerLista>
        {listaViagem.map((viagens) => {
          return (
            <CardLista key={viagens.id}>
              <ImgCartao src={ImagemCartao} />
              <DetalhesViagem>
                <FormataTexto>
                  <strong>Viagem: </strong> {viagens.name}
                </FormataTexto>
                <FormataTexto>
                  <strong>Planeta: </strong> {viagens.planet}
                </FormataTexto>
                <FormataTexto>
                  <strong>Descrição: </strong> {viagens.description}
                </FormataTexto>
                <FormataTexto>
                  <strong>Data: </strong> {viagens.date}
                </FormataTexto>
                <FormataTexto>
                  <strong>Duração: </strong> {viagens.durationInDays}
                </FormataTexto>
              </DetalhesViagem>
            </CardLista>
          );
        })}
      </ContainerLista>
      <Rodape />
    </div>
  );
}

export default ListarViagem;
