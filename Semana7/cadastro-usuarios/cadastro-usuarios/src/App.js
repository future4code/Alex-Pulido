import React from 'react';
import './App.css';
import CriarUsuario from './components/CriarUsuario';
import ListarUsuario from './components/ListarUsuario';



class App extends React.Component{
  state = {
    idTela: false
  };

  onClickTelaListaUsuarios = () => {
    this.setState({idTela: true});
    console.log("estou no click lista usuario")
  };

  onClickTelaUsuario = () => {
    this.setState({idTela: false});
    console.log("estou no click tela usuario")
  };


  render(){
    if(this.state.idTela){
      console.log('valor id', this.state.idTela)
      return <ListarUsuario onIdTelaListaUsuario={this.onClickTelaUsuario} />;
    }else {
      console.log('valor id', this.state.idTela)
      return <CriarUsuario onIdTelaUsuario={this.onClickTelaListaUsuarios} />;
    }
  }}

export default App;
