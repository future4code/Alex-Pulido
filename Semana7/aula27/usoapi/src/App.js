import React from "react"
import axios from "axios"
import styled from "styled-components"

const AppContainer = styled.div`
  width: 900px;
  height: 800px;
`
const BoardCard = styled.div`
  background-color: gray;
  margin: 20px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr fr;
  width: 800px;
  height: 700px;
  gap: 30px;
  border-radius: 8px;
`
const PokeCard = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100px;
  height: 150px;
`

class App extends React.Component {
  state = {
    pokeLista: []
  }

  componentDidMount = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=900")
      .then(response => {
        this.setState({pokeLista: Response.data});
      })
      .catch(erro => {
        console.log(erro);
      });
  };

  pegarPokemon = event => {
    const pokeTipo = event.target.value;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeTipo}`)
      .then(response => {
        this.setState({ pokeTipo: response.data.types });
        console.log(response.data)
      })
      .catch(erro => {
        console.log(erro);
      });
  };

  render() {

    return(
      <AppContainer>
        <BoardCard>
          <PokeCard>
          {this.state.pokeTipo && (
            <div></div>
          )}

          </PokeCard>
        </BoardCard>
      </AppContainer>
    )
  }
}

export default App;