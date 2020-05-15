import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import App from "../App";
import axios from "axios";

const TelaPrincipal = styled.div`
  width: 597px;
  height: 580px;
  display: flex;
  flex-direction: column;
  background-color: #fcfafa;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin: 20px auto;
  align-items: center;
  overflow: auto;
`;

const TelaCard = styled.div`
  background-color: #7fc5ed;
  display: flex;
  align-items: center;
  width: 550px;
  height: 100px;
  border-radius: 16px;
  margin: 10px 0;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ImagenCard = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  margin: 5px;
`;

const BotoesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  height: 50px;
  margin: 0px auto;
  padding-top: 5px;
`;

const CardPessoas = () => {
  const [pagina, setPagina] = useState("match");
  const [listpessoas, setListaPessoas] = useState([]);
  const [id, setId] = useState("");

  const onAparecePrincipal = () => {
    setPagina("principal");
  };

  const CarregaPessoas = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alex-pulido/matches"
      )
      .then((response) => {
        console.log(response.data);
        setListaPessoas(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    CarregaPessoas();
  }, []);

  const onClickLimpar = () => {
    const bodyDel = {
      id: id,
    };

    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alex-pulido/clear",
        bodyDel
      )
      .then((response) => {
        console.log(response.data);
        CarregaPessoas();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (pagina === "match") {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={onClickLimpar}>
          Limpar Tudo
        </Button>
        <TelaPrincipal>
          <BotoesHeader>
            <Button
              variant="contained"
              color="primary"
              onClick={onAparecePrincipal}
            >
              <ArrowBackIcon />
            </Button>
          </BotoesHeader>
          {listpessoas.map((pessoas) => {
            return (
              <TelaCard key={pessoas.id}>
                <ImagenCard src={pessoas.photo} />
                <p>{pessoas.name}</p>
              </TelaCard>
            );
          })}
        </TelaPrincipal>
      </div>
    );
  } else if (pagina === "principal") {
    return <App />;
  }
};
export default CardPessoas;
