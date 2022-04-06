import axios from "axios"
import React from "react"
import styled from "styled-components"

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  min-height: 300px;
  width: 300px;
  border: 1px solid black;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #243754;
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`

const Campo = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  font-weight: bold;

  input {
    width: 200px;
    height: 25px;
    border-radius: 5px;
  }
`

const ContainerBotoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  button {
    color: white;
    font-weight: bold;
    padding: 10px;
    border-radius: 12px;
    background-color: #344867;
    border: 2px solid white;
  }

  button:hover {
    background-color: #0f213b;
  }

`

const headers = {
  headers: {
    Authorization: "rodrigo-goularte-shaw"
  }
}

class Cadastro extends React.Component {
  state = {
    inputNome: "",
    inputEmail: ""
  }

  createUser = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        headers
      )
      .then((response) => {
        alert("Cadastro realizado com sucesso!");
        this.setState({
          inputNome: "",
          inputEmail: "",
        });
      })
      .catch((error) => {
        alert("Algo deu errado. Tente novamente.");
      });
  };

  onChangeNome = (event) => {
    this.setState({
      inputNome: event.target.value,
    });
  };

  onChangeEmail = (event) => {
    this.setState({
      inputEmail: event.target.value,
    })
  }

  render() {
    return (
      <ContainerPrincipal>
        <h2>Faça seu Cadastro</h2>

        <ContainerInputs>
          <Campo>
            <label>Nome:</label>
            <input value={this.state.inputNome} onChange={this.onChangeNome} />
          </Campo>
          <Campo>
            <label>Email:</label>
            <input value={this.state.inputEmail} onChange={this.onChangeEmail} />
          </Campo>
        </ContainerInputs>

        <ContainerBotoes>
          <button onClick={this.createUser}>Cadastrar</button>
          <button onClick={this.props.irParaLista}>Ver usuários</button>
        </ContainerBotoes>
      </ContainerPrincipal>
    );
  }
}

export default Cadastro;
