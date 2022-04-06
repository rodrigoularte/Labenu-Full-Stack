import axios from "axios"
import React from "react"
import styled from "styled-components"
import DetalhesUsuario from "./DetalhesUsuario"
import trashCan from "../Img/bin.png"

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
  gap: 20px;
  background-color: #243754;
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const Topo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  button {
    color: white;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 12px;
    background-color: #a03a3a;
    border: 2px solid white;
  }

  button:hover {
    background-color: #9e1414;
  }
`


const ContainerLista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`

const Usuario = styled.div`
  display: flex;
  font-weight: bold;
  border-radius: 25px;
  padding: 10px;
  width: 100%;
  justify-content: space-between;
  background-color: #344867;
  align-items: center;

  :hover {
    background-color: #0f213b;
  }
`

const Botoes = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  p:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  
  img {
    display: flex;
    height: 30px;
    padding: 3px;
    border-radius: 50%;
  }

  img:hover {
    background-color: #344867;
  }
`

const headers = {
  headers: {
    Authorization: "rodrigo-goularte-shaw"
  }
}

class ListaDeUsuarios extends React.Component {
  state = {
    usuarios: [],
    lista: true
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
    if (window.confirm("Tem certeza de que deseja deletar?")) {
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
    else {
      alert("Operação cancelada")
    }
  }

  verUsuario = () => {
    this.state.lista ? (this.setState({ lista: false })) :
      (this.setState({ lista: true }))
  }

  render() {
    const listaDeUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <Usuario key={usuario.id}>
          <p>{usuario.name}</p>

          <Botoes>
            <p onClick={() => this.verUsuario()}>+ info</p>
            <img src={trashCan} alt="deletar" onClick={() => this.deleteUser(usuario.id)}/>
            {/* <button onClick={() => this.deleteUser(usuario.id)}>Deletar</button> */}
          </Botoes>
        </Usuario>
      )
    })

    return (
      <>
        {
          this.state.lista ? (
            <ContainerPrincipal>
              <Topo>
                <h2>Lista de usuários</h2>
                <button onClick={this.props.irParaCadastro}>X</button>
              </Topo>

              <ContainerLista>{listaDeUsuarios}</ContainerLista>

            </ContainerPrincipal>
          ) : (
            <ContainerPrincipal>
              <DetalhesUsuario
                verUsuario={this.verUsuario}
              // id={this.usuario.id}
              />
            </ContainerPrincipal>
          )
        }
      </>
    );
  }
}

export default ListaDeUsuarios;
