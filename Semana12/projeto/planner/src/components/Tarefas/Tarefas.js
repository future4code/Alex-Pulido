import React, { useState, useEffect } from "react";
import { useForm } from "../Form/useForm";

import { getTarefas } from "../Request/getTarefas";
import { delTarefa } from "../Request/delTarefa";

import { ContainerDia, BodyPlanner } from "../Styles/styles";

import { TopContainer } from "../Styles/styles";
import { postCriarTarefa } from "../Request/postCriarTarefa";

export function Tarefas() {
  const { form, onChange, resetForm } = useForm({
    tarefa: "",
    semana: "",
  });

  const [listaTarefas, setListaTarefas] = useState([]);

  const carregaTarefas = () => {
    getTarefas()
      .then((tasks) => {
        setListaTarefas(tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    carregaTarefas();
  }, []);

  const segunda = listaTarefas.filter((tarefas) => {
    return tarefas.day === "Segunda-Feira";
  });

  const terca = listaTarefas.filter((tarefas) => {
    return tarefas.day === "Terça-Feira";
  });

  const quarta = listaTarefas.filter((tarefas) => {
    return tarefas.day === "Quarta-Feira";
  });

  const quinta = listaTarefas.filter((tarefas) => {
    return tarefas.day === "Quinta-Feira";
  });

  const sexta = listaTarefas.filter((tarefas) => {
    return tarefas.day === "Sexta-Feira";
  });

  const sabado = listaTarefas.filter((tarefas) => {
    return tarefas.day === "Sábado";
  });

  const domingo = listaTarefas.filter((tarefas) => {
    return tarefas.day === "Domingo";
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(form);
  };

  const onClickCriarTarefa = () => {
    if (form.tarefa && form.semana) {
      const body = {
        text: form.tarefa,
        day: form.semana,
      };

      postCriarTarefa(body)
        .then((tarefa) => {
          carregaTarefas();
          resetForm();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Os campos não podem ser vazios");
    }
  };

  const onClickDeletaTarefa = (id) => {
    const body = {
      id: id,
    };

    delTarefa(body)
      .then((tarefa) => {
        carregaTarefas();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TopContainer>
        <label for="nova-task">Nova Tarefa:</label>
        <input
          type="text"
          placeholder="Tarefa"
          onChange={handleInputChange}
          value={form.tarefa}
          name="tarefa"
          required
        />
        <select
          type="text"
          value={form.semana}
          name="semana"
          onChange={handleInputChange}
          required
        >
          <option value="" disabled selected>
            Selecione...
          </option>
          <option>Segunda-Feira</option>
          <option>Terça-Feira</option>
          <option>Quarta-Feira</option>
          <option>Quinta-Feira</option>
          <option>Sexta-Feira</option>
          <option>Sábado</option>
          <option>Domingo</option>
        </select>
        <button onClick={onClickCriarTarefa}>Criar Tarefa!</button>
      </TopContainer>
      <hr />
      <BodyPlanner>
        <ContainerDia>
          Segunda-Feira
          {segunda.map((tarefas) => {
            return (
              <li>
                {tarefas.text}
                <button onClick={() => onClickDeletaTarefa(tarefas.id)}>
                  X
                </button>
              </li>
            );
          })}
        </ContainerDia>
        <ContainerDia>
          Terça-Feira
          {terca.map((tarefas) => {
            return (
              <li>
                {tarefas.text}
                <button onClick={() => onClickDeletaTarefa(tarefas.id)}>
                  X
                </button>
              </li>
            );
          })}
        </ContainerDia>
        <ContainerDia>
          Quarta-Feira
          {quarta.map((tarefas) => {
            return (
              <li>
                {tarefas.text}
                <button onClick={() => onClickDeletaTarefa(tarefas.id)}>
                  X
                </button>
              </li>
            );
          })}
        </ContainerDia>
        <ContainerDia>
          Quinta-Feira
          {quinta.map((tarefas) => {
            return (
              <li>
                {tarefas.text}
                <button onClick={() => onClickDeletaTarefa(tarefas.id)}>
                  X
                </button>
              </li>
            );
          })}
        </ContainerDia>
        <ContainerDia>
          Sexta-Feira
          {sexta.map((tarefas) => {
            return (
              <li>
                {tarefas.text}
                <button onClick={() => onClickDeletaTarefa(tarefas.id)}>
                  X
                </button>
              </li>
            );
          })}
        </ContainerDia>
        <ContainerDia>
          Sábado
          {sabado.map((tarefas) => {
            return (
              <li>
                {tarefas.text}
                <button onClick={() => onClickDeletaTarefa(tarefas.id)}>
                  X
                </button>
              </li>
            );
          })}
        </ContainerDia>
        <ContainerDia>
          Domingo
          {domingo.map((tarefas) => {
            return (
              <li>
                {tarefas.text}
                <button onClick={() => onClickDeletaTarefa(tarefas.id)}>
                  X
                </button>
              </li>
            );
          })}
        </ContainerDia>
      </BodyPlanner>
    </form>
  );
}
