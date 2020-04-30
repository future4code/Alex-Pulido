import React from "react";
import styled from "styled-components";
import axios from "axios";

const CriarUsuarioContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	align-items: center;
	border: 1px solid blue;
	width: 300px;
	height: 170px;
	margin: 50px auto;
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
		usuario: '',
		email: '',
		novoUsuarioValue: '',
		novoEmailValue: ''
	}

	onChangeNomeUsuario = event => {
		this.setState({novoUsuarioValue: event.target.value});
	};

	onChangeEmailUsuario = event => {
		this.setState({novoEmailValue: event.target.value})
	}

	onCriarUsuario = () => {
		this.criarUsuario(this.state.novoUsuarioValue, this.state.novoEmailValue);
	}

	criarUsuario = (nomeUsuario, emailUsuario) => {
		const body = {
			name: nomeUsuario,
			email: emailUsuario
		};

		axios
			.post(
				"https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
				body,
				{
					headers: {
						Authorization: "alex-pulido-julian"
					}
				}
			)
			.then(retorno => {
				window.alert("Usuário criado!")
			})
			.catch(error => {
				window.alert("Erro na criação do usuário")
			});
	}

	render(){
		return(
			<div>
			<button onClick={this.props.onIdTelaUsuario}>Ir para a página de lista</button>
				<CriarUsuarioContainer> 
					<EstiloDiv>
						<label>Nome: </label>
						<input
							value={this.state.novoUsuarioValue}
							onChange={this.onChangeNomeUsuario}
						/>
					</EstiloDiv>
					<EstiloDiv>
						<label>E-mail: </label>
						<input
							value={this.state.novoEmailValue}
							onChange={this.onChangeEmailUsuario}
						/>
					</EstiloDiv>
				<Botao onClick={this.onCriarUsuario}>Salvar</Botao>
			</CriarUsuarioContainer>
			</div>
		);}}

		export default CriarUsuario;