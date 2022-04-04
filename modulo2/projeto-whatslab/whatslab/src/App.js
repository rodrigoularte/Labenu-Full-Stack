import React from "react"
import styled from 'styled-components'
import Mensagem from "./Componentes/Mensagem"

// --------------------styled-components--------------------
const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`

const Whatslab = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
`

const Conversa = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #292828;
  justify-content: flex-end;
  flex-grow: 1;
  padding: 1.5em 0;
  overflow-y: auto;
`

const ContainerInferior = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-self: center;
  justify-content: space-between;
`

const InputUsuario = styled.input`
  width: 100px;
`
const InputMensagem = styled.input`
  flex-grow: 1;
`
// --------------------styled-components--------------------

class App extends React.Component {

  state = {
    mensagens: [],

    valorInputUsuario: "",
    valorInputMensagem: ""
  }

  adicionaMensagem = () => {
    const novaMensagem = {
      remetente: this.state.valorInputUsuario,
      conteudo: this.state.valorInputMensagem
    }

    const novoMensagens = [...this.state.mensagens, novaMensagem]

    this.setState({
      mensagens: novoMensagens,
      valorInputMensagem: ""
    })
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value })
  }

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value })
  }


  render() {

    const listaDeMensagens = this.state.mensagens.map((mensagem) => {
      return (
        <Mensagem
          remetente={mensagem.remetente}
          conteudo={mensagem.conteudo}
        />
      )
    })

    return (
      <ContainerPrincipal>
        <Whatslab>

          <Conversa>
            {listaDeMensagens}
          </Conversa>

          <ContainerInferior>
            <InputUsuario
              value={this.state.valorInputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder={"Usuário"}
            />
            <InputMensagem
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}
            />
            <button onClick={this.adicionaMensagem}>Enviar</button>
          </ContainerInferior>

        </Whatslab>
      </ContainerPrincipal>
    )
  }
}

export default App