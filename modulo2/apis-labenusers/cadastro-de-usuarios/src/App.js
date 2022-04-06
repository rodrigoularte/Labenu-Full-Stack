import './App.css';
import React from 'react';
import styled from 'styled-components'
import Cadastro from './Components/Cadastro';
import ListaDeUsuarios from './Components/ListaDeUsuarios';
import DetalhesUsuario from './Components/DetalhesUsuario';

const ContainerSecao = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #000c1f;
  max-width: 100vw;
  min-height: 100vh;
`

class App extends React.Component {

  state = {
    pagina: "cadastro"
  }

  irParaLista = () => {
    this.setState({
      pagina: "lista"
    })
  }

  irParaCadastro = () => {
    this.setState({
      pagina: "cadastro"
    })
  }

  irParaDetalhes = () => {
    this.setState({
      pagina: "detalhes"
    })
  }

  render() {
    let secao
    switch (this.state.pagina) {
      case "lista":
        secao = <ListaDeUsuarios irParaCadastro={this.irParaCadastro} irParaDetalhes={this.irParaDetalhes}/>
        break;
      case "cadastro":
        secao = <Cadastro irParaLista={this.irParaLista}/>
        break
      case "detalhes":
        secao = <DetalhesUsuario irParaLista={this.irParaLista}/>
        break
      default:
        secao = <p>Nenhuma seção selecionada</p>
        break
    }

    return (
      <ContainerSecao>
        {secao}
      </ContainerSecao>
    )
  }
}

export default App;
