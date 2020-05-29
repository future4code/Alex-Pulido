import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import ImagemCartao from "../../img/planeta.jpg";
import { getViagens } from "../Request/getViagens";

const ContainerCartoes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  justify-content: space-evenly;
  margin: 0px auto;
  width: 70%;
  height: 90%;
`;

const CartaoViagem = styled.div`
  width: 200px;
  height: 260px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
`;

const ImgCartaoViagem = styled.img`
  width: 190px;
  height: 80px;
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 5px;
`;

const DetalhesViagem = styled.div`
  width: 190px;
  height: 135px;
  background-color: rgba(2, 2, 54, 0.7);
  border-radius: 5px;
  margin-top: 1px;
  margin-left: 5px;
  color: white;
  font-size: 12px;
`;

const BotaoInscricao = styled.button`
  width: 80px;
  height: 25px;
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 5px;
  align-self: flex-end;
  background-color: #020236;
  color: white;
  border-style: none;
`;

const FormataTexto = styled.p`
  margin: 0px 0px 0px 2px;
`;

function CartoesViagem(props) {
  const [viagensParaInscricao, setViagensParaInscricao] = useState([]);
  const history = useHistory();

  const carregaViagens = () => {
    getViagens()
      .then((trips) => {
        console.log("Get", trips);
        setViagensParaInscricao(trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goToInscricaoViagemPage = (
    idViagem,
    nomeViagem,
    nomePlaneta,
    descricao,
    data,
    duracao
  ) => {
    localStorage.setItem("id", idViagem);
    localStorage.setItem("nomeViagem", nomeViagem);
    localStorage.setItem("nomePlaneta", nomePlaneta);
    localStorage.setItem("descricao", descricao);
    localStorage.setItem("data", data);
    localStorage.setItem("duracao", duracao);
    history.push(`/InscricaoViagem/${idViagem}`);
  };

  useEffect(() => {
    carregaViagens();
  }, []);

  return (
    <ContainerCartoes>
      {viagensParaInscricao.map((viagens) => {
        return (
          <CartaoViagem key={viagens.id}>
            <ImgCartaoViagem src={ImagemCartao}></ImgCartaoViagem>
            <DetalhesViagem>
              <FormataTexto>
                <strong>Viagem:</strong> {viagens.name}
              </FormataTexto>
              <FormataTexto>
                <strong>Planeta:</strong> {viagens.planet}
              </FormataTexto>
              <FormataTexto>
                <strong>Descrição:</strong> {viagens.description}
              </FormataTexto>
              <FormataTexto>
                <strong>Data:</strong> {viagens.date}
              </FormataTexto>
              <FormataTexto>
                <strong>Duração:</strong> {viagens.durationInDays}
              </FormataTexto>
            </DetalhesViagem>
            <BotaoInscricao
              onClick={() =>
                goToInscricaoViagemPage(
                  viagens.id,
                  viagens.name,
                  viagens.planet,
                  viagens.description,
                  viagens.date,
                  viagens.durationInDays
                )
              }
            >
              Inscrição
            </BotaoInscricao>
          </CartaoViagem>
        );
      })}
    </ContainerCartoes>
  );
}

export default CartoesViagem;
