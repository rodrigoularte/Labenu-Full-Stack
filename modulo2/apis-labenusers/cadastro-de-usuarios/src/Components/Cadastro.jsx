import axios from 'axios'
import React from 'react';

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
      "name": this.state.inputNome,
      "email": this.state.inputEmail
    }

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        headers
      )
      .then((response) => {
        alert("Cadastro realizado com sucesso!")
        this.setState({
          inputNome: "",
          inputEmail: ""
        })
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  onChangeNome = (event) => {
    this.setState({
      inputNome: event.target.value
    })
  }

  onChangeEmail = (event) => {
    this.setState({
      inputEmail: event.target.value
    })
  }

//   irParaLista = () => {
//     this.setState({
//       pagina: "lista"
//     })
//   }

  render() {
    // console.log(this.state.inputNome)
    // console.log(this.state.inputEmail)
    // console.log(this.state.usuarios)

    return (
      <div>
        <div>
          <h2>Cadastro</h2>

          <label>Nome:</label>
          <input
            value={this.state.inputNome}
            onChange={this.onChangeNome}
          />

          <label>Email:</label>
          <input
            value={this.state.inputEmail}
            onChange={this.onChangeEmail}
          />

          <button onClick={this.createUser}>Criar cadastro</button>
        </div>

        <button onClick={this.props.irParaLista}>Ver usuários</button>

      </div>
    )
  }
}

export default Cadastro;
