import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Tarefas from "./components/Tarefas/Tarefas";
import App from "./App";

describe("Funcionalidade de adicionar tarefa", () => {
  test("Botão que cria a tarefa", async () => {
    const { queryByText } = render(<App />);

    expect(queryByText(/criar tarefa!/i)).not.toEqual(null);
  });

  test("Seleciona o dia da semana para tarefa", async () => {
    const { queryByText } = render(<App />);

    expect(queryByText(/Selecione/i)).not.toEqual(null);
  });
});

describe("Corpo do Plainner", () => {
  test("Área da segunda", async () => {
    const { queryAllByText } = render(<App />);

    expect(queryAllByText(/segunda-feira/i)).not.toEqual(null);
  });

  test("Área da terça-feira", async () => {
    const { queryAllByText } = render(<App />);

    expect(queryAllByText(/terca-feira/i)).not.toEqual(null);
  });

  test("Área da quarta-feira", async () => {
    const { queryAllByText } = render(<App />);

    expect(queryAllByText(/quarta-feira/i)).not.toEqual(null);
  });

  test("Área da quinta-feira", async () => {
    const { queryAllByText } = render(<App />);

    expect(queryAllByText(/quinta-feira/i)).not.toEqual(null);
  });

  test("Área da sexta-feira", async () => {
    const { queryAllByText } = render(<App />);

    expect(queryAllByText(/sexta-feira/i)).not.toEqual(null);
  });

  test("Área do sábado", async () => {
    const { queryAllByText } = render(<App />);

    expect(queryAllByText(/sabado/i)).not.toEqual(null);
  });

  test("Área do domingo", async () => {
    const { queryAllByText } = render(<App />);

    expect(queryAllByText(/domingo/i)).not.toEqual(null);
  });
});
