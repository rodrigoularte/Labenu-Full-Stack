import axios from "axios";
import React from "react";

const headers = {
  headers: {
    Authorization: "rodrigo-goularte-shaw"
  }
}

class ListaDeUsuarios extends React.Component {
  state = {
    usuarios: []
  }

  componentDidMount = () => {
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        headers
      )
      .then((response) => {
        this.setState({
          usuarios: response.data
        })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  deleteUser = (id) => {
    // console.log(id)
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        headers
      )
      .then(() => {
        this.getAllUsers()
        alert("Usuário deletado com sucesso!")
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  render() {

    const listaDeUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <li key={usuario.id}>
          {usuario.name}
          <button onClick={() => this.deleteUser(usuario.id)}>Deletar</button>
        </li>
      )
    })

    return (
      <div>
        <div>
          <h2>Lista de usuários</h2>
          <ul>{listaDeUsuarios}</ul>
        </div>

        <button onClick={this.props.irParaCadastro}>
          Voltar para cadastro
        </button>
      </div>
    );
  }
}

export default ListaDeUsuarios;
