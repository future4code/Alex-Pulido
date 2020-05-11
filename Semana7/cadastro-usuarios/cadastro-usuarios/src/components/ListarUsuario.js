import React from "react";
import styled from "styled-components";
import axios from "axios";

const ListaUsuariosContainer = styled.div`
  margin: 0px auto;
`

const TelaUsuarios = styled.div`
  margin: 50px 200px;
`

const ItemUsuario = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

class ListarUsuario extends React.Component{
    state = {
        id: [],
        name: [],

    }

    componentDidMount() {
        this.pegarUsuarios();
      }

    pegarUsuarios = () => {
        axios
          .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
              headers: {
                Authorization: "alex-pulido-julian"
              }
            }
          )
          .then(retorno => {
            this.setState({ name: retorno.data });
            })
          .catch(error => {
            console.log(error.response);
          });
      };

      onClickDeletarUsuario = usuarioId => {
        axios
          .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioId}`,
            {
              headers: {
                Authorization: "alex-pulido-julian"
              }
            }
          )
          .then(resposta => {
            window.alert("Usuário deletado com sucesso!");
            this.pegarUsuarios();
          })
          .catch(error => {
            window.alert("Deu erro na deleção");
          });
      }

      onClickConfirmaDelete = (usuarioId) => { 
        let confirma = window.confirm("Confirma deleção do usuário?");
        if (confirma){
          this.onClickDeletarUsuario(usuarioId)
        }
      }

    render() {
        return(
            <ListaUsuariosContainer>
              <button onClick={this.props.onIdTelaListaUsuario}>Ir para a página de lista</button>
              <TelaUsuarios>
                <h1>Usuários Cadastrados:</h1>
                  {this.state.name.map(usuario => {
                    return (
                      <ItemUsuario>
                        <p>{usuario.name}</p>
                          <button onClick={() => this.onClickConfirmaDelete(usuario.id)}>
                            Deletar
                          </button>
                      </ItemUsuario>
                    );
                  })}
                </TelaUsuarios>
            </ListaUsuariosContainer>
        );}}

        export default ListarUsuario;