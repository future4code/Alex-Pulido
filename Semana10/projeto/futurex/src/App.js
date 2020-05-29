import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import GestaoPage from "./components/GestaoPage/GestaoPage";
import ListarViagemPage from "./components/ListarViagensPage/ListarViagemPage";
import CriarViagemPage from "./components/CriarViagemPage/CriarViagemPage";
import GerenciarInscricoesPage from "./components/GerenciaInscricoesPage/GerenciaInscricoesPage";
import InscricaoViagemPage from "./components/InscricaoViagempage/InscricaoViagemPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Login">
          <LoginPage />
        </Route>
        <Route exact path="/Gestao">
          <GestaoPage />
        </Route>
        <Route exact path="/ListarViagem">
          <ListarViagemPage />
        </Route>
        <Route exact path="/CriarViagem">
          <CriarViagemPage />
        </Route>
        <Route exact path="/GerenciarInscricoes">
          <GerenciarInscricoesPage />
        </Route>
        <Route exact path="/InscricaoViagem/:idViagem">
          <InscricaoViagemPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
