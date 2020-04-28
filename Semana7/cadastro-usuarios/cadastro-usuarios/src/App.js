import React from 'react';
import axios from "axios";
import './App.css';
import CriarUsuario from './components/CriarUsuario';
import styled from "styled-components";

const FormAplicacao = styled.div`

`

const AppContainer = styled.div`
  border: 1px solid blue;
  width: 300px;
  height: 160px;
  margin: 100px 400px;
  
`

class App extends React.Component{


  render(){
  return(
    <FormAplicacao>
      <button>Ir para a página de lista</button>
      <AppContainer>
        <CriarUsuario />
      </AppContainer>
    </FormAplicacao>
  );}}

export default App;
