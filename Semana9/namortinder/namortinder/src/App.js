import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import "./App.css";
import logo from "./img/logotipo.jpg";
import CardPessoas from "./Components/CardsPessoas";

import Button from "@material-ui/core/Button";
import Check from "@material-ui/icons/Check";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Badge from "@material-ui/core/Badge";

const TelaPrincipal = styled.div`
  width: 597px;
  height: 580px;
  display: flex;
  flex-direction: column;
  background-color: #fcfafa;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin: 20px auto;
`;

const BotoesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 50px;
  margin: 0px auto;
`;

const BotoesFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 50px;
  margin: 0px auto;
`;

const ImagenPessoa = styled.div`
  width: 500px;
  height: 450px;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 10px auto;
  position: relative;
`;

const FotoPessoa = styled.img`
  width: 500px;
  height: 450px;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0px auto;
`;

const LogoTipo = styled.img`
  width: 50px;
  height: 45px;
`;

const Descricao = styled.div`
  width: 500px;
  height: 50px;
  position: absolute;
  top: 330px;
  left: 5px;
  font-size: 19px;
  color: white;
  text-shadow: 2px 2px black;
`;

const ContainerLogo = styled.div`
  margin: 0px auto;
  top: 10px;
`;

const App = () => {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState("");
  const [pagina, setPagina] = useState("principal");
  const [contadorMatch, setContadorMatch] = useState([]);

  const pegaProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alex-pulido/person"
      )
      .then((response) => {
        setId(response.data.profile.id);
        setNome(response.data.profile.name);
        setIdade(response.data.profile.age);
        setDescricao(response.data.profile.bio);
        setFoto(response.data.profile.photo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    pegaProfile();
    CarregaPessoas();
  }, []);

  const onSelecionaPar = () => {
    adicionaParApi(id, true);
  };

  const adicionaParApi = () => {
    const body = {
      id: id,
      choice: true,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alex-pulido/choose-person",
        body
      )
      .then((response) => {
        console.log(response.data);
        pegaProfile();
        CarregaPessoas();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onApareceMatch = () => {
    setPagina("match");
  };

  const CarregaPessoas = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alex-pulido/matches"
      )
      .then((response) => {
        setContadorMatch(response.data.matches.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  if (pagina === "principal") {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={onClickLimpar}>
          Limpar Tudo
        </Button>
        <TelaPrincipal>
          <BotoesHeader>
            <ContainerLogo>
              <LogoTipo src={logo} />
            </ContainerLogo>
            <Button
              variant="contained"
              color="primary"
              onClick={onApareceMatch}
            >
              <Badge badgeContent={contadorMatch} color="secondary">
                <Check />
              </Badge>
            </Button>
          </BotoesHeader>
          <ImagenPessoa>
            <FotoPessoa src={foto} alt="imagem da pessoa" />
            <Descricao>
              <strong>{nome}</strong>
              <br />
              <strong>{idade}</strong> anos,
              <br />
              {descricao}
            </Descricao>
          </ImagenPessoa>
          <BotoesFooter>
            <Button variant="contained" color="primary" onClick={pegaProfile}>
              <DeleteForeverIcon />
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={onSelecionaPar}
            >
              <FavoriteIcon />
            </Button>
          </BotoesFooter>
        </TelaPrincipal>
      </div>
    );
  } else if (pagina === "match") {
    return <CardPessoas />;
  }
};

export default App;
