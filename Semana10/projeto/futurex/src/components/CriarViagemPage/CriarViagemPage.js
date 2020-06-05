import React from "react";

import styled from "styled-components";
import postCriarViagem from "../Request/postCriarViagem";

import CabecalhoGerenciar from "../CabecalhoGerenciar/CabecalhoGerenciar";
import Rodape from "../Rodape/Rodape";

import { useCadeadoPage } from "../Cadeado/Cadeado";
import { useForm } from "../Form/useForm";

const FomCriarViagem = styled.div`
  width: 800px;
  height: 500px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: rgba(2, 2, 54, 0.7);
`;

const FormataInput = styled.input`
  width: 90%;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 0 20px 30px;
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

const FormataSelect = styled.select`
  width: 91%;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 0 20px 30px;
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
  margin-bottom: 50px;
`;

const ContainerBotao = styled.div`
  display: flex;
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
  margin: 20px auto;
  border-radius: 5px;
  :hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: rgba(4, 28, 123, 0.88);
  }
`;

function CriarViagemPage() {
  useCadeadoPage();

  const hoje = new Date().toISOString().split("T")[0];

  const { form, onChange, resetForm } = useForm({
    nome: "",
    planeta: "",
    detalhes: "",
    duracao: "",
    data: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(form);
  };

  const onClickadicionaViagem = () => {
    const body = {
      name: form.nome,
      planet: form.planeta,
      date: form.data,
      description: form.detalhes,
      durationInDays: form.duracao,
    };

    postCriarViagem(body)
      .then((viagen) => {
        console.log("Post feito");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <CabecalhoGerenciar />
      <FomCriarViagem onSubmit={handleSubmit}>
        <Titulo>Cadastro de Viagem</Titulo>
        <form>
          <FormataInput
            type="text"
            placeholder="Viagem"
            onChange={handleInputChange}
            value={form.nome}
            name="nome"
            required
            pattern="[A-Za-z ]{5,}"
            title="O campo Viagem deve conter pelo menos 5 letras"
          />
          <FormataSelect
            type="text"
            value={form.planeta}
            name="planeta"
            onChange={handleInputChange}
            required
          >
            <option value="" disabled selected>
              Selecione...
            </option>
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Terra</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urano</option>
            <option>Netuno</option>
          </FormataSelect>

          <FormataInput
            type="text"
            placeholder="Detalhes"
            onChange={handleInputChange}
            value={form.detalhes}
            name="detalhes"
            required
            pattern="[A-Za-z0-9 ]{30,}"
          />
          <FormataInput
            type="date"
            placeholder="Data da viagem"
            onChange={handleInputChange}
            value={form.data}
            name="data"
            min={hoje}
            required
          />
          <FormataInput
            type="number"
            placeholder="Duração"
            onChange={handleInputChange}
            value={form.duracao}
            name="duracao"
            min="50"
            required
          />
          <ContainerBotao>
            <Botao onClick={onClickadicionaViagem}>Salvar</Botao>
            <Botao onClick={resetForm}>Limpar</Botao>
          </ContainerBotao>
        </form>
      </FomCriarViagem>
      <Rodape />
    </div>
  );
}

export default CriarViagemPage;
