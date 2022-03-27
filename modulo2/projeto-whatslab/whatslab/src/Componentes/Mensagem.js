import React from 'react'
import styled from 'styled-components'

const BalaoDeMensagem = styled.div`
  background-color: ${props => {
    if (props.tipo === "eu") {
      return "#DDF7C8"
    } else if (props.tipo === "outro") {
      return "#ffffff"
    }
  }};

  align-self:  ${props => {
    if (props.tipo === "eu") {
      return "flex-end"
    } else {
      return "flex-start"
    }
  }};

  margin-right: ${props => {
    if (props.tipo === "eu") {
      return "1.5em"
    }
  }};

  margin-left: ${props => {
    if (props.tipo !== "eu") {
      return "1.5em"
    }
  }};

  max-width: 60%;
  min-width: 8%;
  margin-bottom: 1em;
  word-wrap: break-word;

  /* Deixando os balões mais bonitos */
  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);

`
/* Estilizando o nome do remetente */
const ContainerNome = styled.div`
  color: #ff0000;
  font-size: 0.8em;
  font-weight: bolder;
  margin-bottom: 0.2em;
`

class Mensagem extends React.Component {

  render() {
    const nome = this.props.remetente.toLowerCase()
    if (nome === "eu") {
      return (
        <BalaoDeMensagem tipo={"eu"}>
          {this.props.conteudo}
        </BalaoDeMensagem>
      )
    } else {
      return (
        <BalaoDeMensagem tipo={"outro"}>
          <ContainerNome>{this.props.remetente}</ContainerNome>
          <div>{this.props.conteudo}</div>
        </BalaoDeMensagem>
      )
    }
  }

  // return (
  //   <MensagemContainer>
  //     <span>{this.props.remetente}:</span> {this.props.conteudo}
  //   </MensagemContainer>
  // )
}

export default Mensagem