import axios from "axios"
import React from "react"
import styled from "styled-components"

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 20px;
  background-color: #243754;
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

const Botao = styled.button`
  color: white;
  font-weight: bold;
  padding: 10px;
  border-radius: 12px;
  background-color: #344867;
  border: 2px solid white;

:hover {
  background-color: #0f213b;
}
`

const headers = {
  headers: {
    Authorization: "rodrigo-goularte-shaw"
  }
}

export default class DetalhesUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
  }

  componentDidMount = () => {
    this.getUserById()
  }

  getUserById = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios
      .get(url, headers)
      .then((response) => {
          console.log(response.data.name)
          this.setState({
            nome: response.data.name,
            email: response.data.email
          })
        })
      .catch((error) => {
        console.log(error.message)
      })
  }

  render() {
    const usuario = this.state
    return (
      <ContainerPrincipal>
        <h2>Detalhes do Usuário</h2>
        <div>
          <h3>Dados confidenciais</h3>
          <p>{this.state.nome}</p>
          <p>{this.state.email}</p>
        </div>
        <Botao onClick={this.props.verUsuario}>Voltar</Botao>
      </ContainerPrincipal>
    )
  }
}
