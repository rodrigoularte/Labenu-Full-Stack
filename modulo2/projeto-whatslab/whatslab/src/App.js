import React from "react";
import styled from 'styled-components'


const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: center;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Whatslab = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  height: 100vh;
`

const Conversa = styled.div`
  background-color: grey;
  width: 500px;
  height: 95%;
`
const ContainerInferior = styled.div`
  display: flex;
    border: 1px solid black;
    max-width: 500px;
    height: 5%;
    align-self: center;
    justify-content: flex-end;
`

class App extends React.Component {
  render() {
      return (
      <ContainerPrincipal>
        <Whatslab>
          <Conversa>
            <p>Nome: mensagem</p>
            <p>Nome: mensagem</p>
          </Conversa>

          <ContainerInferior>
            <input></input>
            <input></input>
            <button>Enviar</button>
          </ContainerInferior>
        </Whatslab>
      </ContainerPrincipal>
    )

  }
}

export default App