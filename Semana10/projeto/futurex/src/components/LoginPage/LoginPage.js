import React, { useState } from "react";
import CabecalhoLogin from "../CabecalhoLogin/CabecalhoLogin";
import Rodape from "../Rodape/Rodape";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useCadeadoPage } from "../Cadeado/Cadeado";

const FormLogin = styled.div`
  width: 400px;
  height: 100%;
  border-radius: 5px;

  background-color: rgba(2, 2, 54, 0.7);
  margin: 50px auto;
`;

const FormataInput = styled.input`
  width: 90%;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 10px 10px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-size: 18px;
  letter-spacing: 1px;
  color: white;
`;

const BotaoLogin = styled.button`
  background-color: rgba(4, 28, 123, 0.88);
  display: block;
  padding: 8px;
  width: 150px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-style: solid;
  font-weight: bold;
  margin: 20px auto;
  border-radius: 5px;
  :hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: rgba(4, 28, 123, 0.88);
  }
`;

const Titulo = styled.h2`
  color: white;
  text-transform: uppercase;
  text-align: center;
  padding-top: 40px;
`;

function LoginPage() {
  useCadeadoPage();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogar = async () => {
    const body = {
      email: email,
      password: password,
    };

    await axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/alex-pulido-julian/login",
        body
      )

      .then((response) => {
        console.log("logado");
        localStorage.setItem("token", response.data.token);
        history.push("/Gestao");
      })
      .catch((error) => {
        console.log(error);
        alert("Login não permitido");
      });
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <CabecalhoLogin />
      <FormLogin>
        <Titulo>Login</Titulo>
        <FormataInput
          type="email"
          placeholder="E-mail Usuário"
          onChange={onChangeEmail}
          value={email}
        ></FormataInput>
        <br />
        <FormataInput
          type="password"
          placeholder="Password"
          onChange={onChangePassword}
          value={password}
        ></FormataInput>
        <br />
        <BotaoLogin onClick={onClickLogar}>Login</BotaoLogin>
        <br />
      </FormLogin>
      <Rodape />
    </div>
  );
}

export default LoginPage;
