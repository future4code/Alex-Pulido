import React from "react";
import styled from "styled-components";
import axios from "axios";

const CriarUsuarioContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;

`
const EstiloDiv = styled.div`
    margin: 15px;
`
const Botao = styled.button`
    width: 50px;
    height: 30px;
    background-color: blue;
    color: white;
`

class CriarUsuario extends React.Component{
    state = {
        usuario: "",
        email: ""
    }

    onChangeUsuarioDigitado = event => {
        this.setState({ usuario: event.target.value})
    };

    onChangeEmailDigitado = event => {
        this.setState({email: event.target.value })
    }

    onClickAdicionarUsuario = () => {
        this.props.adicionarUsuario(this.state.usuario)
        this.props.adicionarUsuario(this.state.email)
    }

    criarUsuario = infoUsuario => {
        const body = {
            name: "string",
            email: "string"
        };

        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                body,
                {
                    huaders: {
                        Authorization: "alex-pulido-julian"
                    }
                }
            )
            .then(retorno => {
                console.log("Usuário criado", retorno);
            })
            .catch(error => {
                console.log("Erro na criação do usuário", error.response);
            });
    }

    render(){
        return(
            <CriarUsuarioContainer> 
                <EstiloDiv>
                    <label>Nome: </label>
                    <input
                        value={this.state.usuario}
                        onChange={this.onChangeUsuarioDigitado}
                    />
                </EstiloDiv>
                <EstiloDiv>
                    <label>E-mail: </label>
                    <input
                        value={this.state.email}
                        onChange={this.onChangeEmailDigitado}
                    />
                </EstiloDiv>
                <Botao>Salvar</Botao>
            </CriarUsuarioContainer>
        );}}

        export default CriarUsuario;