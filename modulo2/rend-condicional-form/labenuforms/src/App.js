import React from "react"
import styled from "styled-components"
import './App.css';
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import Final from "./Components/Final";

const ContainerInicial = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;

  button {
    width: 15%;
  }
`

export default class App extends React.Component {

  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      default:
        return <Final />
    }
  }

  mudaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }
  
  render() {
    return (
      <ContainerInicial>
        {this.renderizaEtapa()}
        {this.state.etapa <= 3 && (<button onClick={this.mudaEtapa}>Próxima etapa</button>)}
      </ContainerInicial>
    )    
  }
}
