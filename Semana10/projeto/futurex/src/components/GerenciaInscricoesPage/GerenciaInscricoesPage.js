import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CabecalhoGerenciar from "../CabecalhoGerenciar/CabecalhoGerenciar";
import Rodape from "../Rodape/Rodape";
import { useCadeadoPage } from "../Cadeado/Cadeado";

import { getDetalhesViagem } from "../Request/getDetalhesViagem";
import { getViagens } from "../Request/getViagens";
import { putSelecionaCandidato } from "../Request/putSelecionaCandidato";
import { useForm } from "../Form/useForm";

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 500px;
  border-radius: 5px;
  margin: 0 auto;
  align-items: center;
  background-color: rgba(2, 2, 54, 0.7);
  overflow: auto;
`;

const Botao = styled.button`
  background-color: rgba(4, 28, 123, 0.88);
  display: block;
  padding: 8px;
  width: 100px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-style: solid;
  font-weight: bold;
  border-radius: 5px;
  :hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: rgba(4, 28, 123, 0.88);
  }
`;

const FormataSelect = styled.select`
  width: 80%;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-size: 18px;
  letter-spacing: 1px;
  :invalid {
    color: red;
  }
  :valid {
    color: green;
  }
`;

const Titulo = styled.h2`
  color: white;
  text-transform: uppercase;
  text-align: center;
  padding-top: 40px;
  margin-bottom: 20px;
`;

const CardAprovacao = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 80%;
  height: 170px;
  border-radius: 5px;
  border: solid white 1px;
  margin-top: 20px;
`;

const ContainerDescricao = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1 / span 2;
  width: 97%;
  height: 90%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  margin: 7px auto 10px 7px;
`;

const BotaoAceitar = styled.div`
  grid-row: 3;
  grid-column: 2;
  margin-right: 8px;
  justify-self: end;
`;

const BotaoReprovar = styled.div`
  grid-row: 3;
  grid-column: 3;
  margin-right: 8px;
  justify-self: end;
`;

const Aceito = styled.div`
  margin: 0 auto;
  color: white;
`;

const FormataTexto = styled.p`
  margin: 0px 0px 0px 5px;
  font-size: 15px;
  color: white;
`;

function GerenciarInscricoesPage() {
  useCadeadoPage();
  const [detalhesViagem, setDetalhesViagem] = useState([]);
  const [viagens, setViagens] = useState([]);
  const [pegaId, setPegaId] = useState("");

  const { form, onChange, resetForm } = useForm({
    id: "",
    token: "",
    aprovado: false,
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  useEffect(() => {
    carregaViagens();
  }, []);

  useEffect(() => {
    getDetalhesViagem(pegaId)
      .then((trips) => {
        console.log("Peguei as viagens", trips);
        setDetalhesViagem(trips.candidates);
        console.log("Peguei os candidatos", trips.candidates);
        console.log("Peguei os aprovados", trips.approved);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pegaId]);

  const pegaValorSelect = (event) => {
    setPegaId(event.target.value);
  };

  const carregaViagens = () => {
    getViagens()
      .then((trips) => {
        setViagens(trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickSelecionar = (valor) => {
    const body = {
      approve: valor,
      tripId: "Cp58dI26SIQDsMDb3IX2",
      candidateId: "au8fkICOBVW42w2VqMQ0",
    };
    putSelecionaCandidato(body)
      .then((candidato) => {
        console.log(candidato);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <CabecalhoGerenciar />
      <ContainerPage>
        <Titulo>Gerencia Inscrições</Titulo>
        <FormataSelect onChange={pegaValorSelect}>
          {viagens.map((viagens) => {
            return (
              <option key={viagens.id} value={viagens.id}>
                {viagens.name}
              </option>
            );
          })}
        </FormataSelect>
        {detalhesViagem.map((Detalhes) => {
          return (
            <CardAprovacao key={Detalhes.id}>
              <ContainerDescricao>
                <FormataTexto>
                  <strong>Nome: </strong>
                  {Detalhes.name}
                </FormataTexto>
                <FormataTexto>
                  <strong>Detalhes: </strong>
                  {Detalhes.applicationText}
                </FormataTexto>
                <FormataTexto>
                  <strong>Profissão: </strong>
                  {Detalhes.profession}
                </FormataTexto>
                <FormataTexto>
                  <strong>Pais: </strong>
                  {Detalhes.country}
                </FormataTexto>
                <FormataTexto>
                  <strong>Idade: </strong>
                  {Detalhes.age}
                </FormataTexto>
              </ContainerDescricao>
              <Aceito>
                Aceito: <input type="checkbox" value="" />
              </Aceito>
              <BotaoAceitar>
                <Botao
                  value={form.aceita}
                  name="aceita"
                  onClick={() => onClickSelecionar(true)}
                >
                  Aceitar
                </Botao>
              </BotaoAceitar>
            </CardAprovacao>
          );
        })}
      </ContainerPage>
      <Rodape />
    </div>
  );
}

export default GerenciarInscricoesPage;
