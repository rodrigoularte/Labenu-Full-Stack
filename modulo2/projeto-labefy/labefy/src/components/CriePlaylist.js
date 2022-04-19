import React from "react"
import axios from "axios"
import { urlBase } from "../constants/urls.js"
import styled from "styled-components"

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2d2d2d;
  border-radius: 10px;
  min-height: 80px;
  max-width: 700px;
  padding: 20px;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2vh;

  input {
    background-color: #191919;
    border: 1px solid gray;
    color: gray;
    border-radius: 5px;
    width: 220px;
    padding: 10px;
  }

  button {
    display: flex;
    background-color: #ff7038;
    transition-duration: 0.4s;
    padding: 5px 20px;
    color: white;
    font-weight: bolder;
    font-size: 1.1em;
    border-radius: 10px;
    border: none;
  }

  button:hover {
    background-color: #fc4902;
    cursor: pointer;
  }
`

const headers = {
  headers: {
    Authorization: "rodrigo-goularte-shaw"
  }
}


export default class CriePlaylist extends React.Component {
  state = {
    inputPlaylist: ""
  }

  createPlaylist = () => {
    const body = {
      name: this.state.inputPlaylist
    }

    axios
      .post(`${urlBase}`, body, headers)
      .then(() => {
        alert("Playlist criada com sucesso!")
        this.setState({ inputPlaylist: "" })
        this.props.getAllPlaylists()
      })
      .catch((err) => alert(err.response.data.message))
  }

  onChangeNomePlaylist = (event) => {
    this.setState({
      inputPlaylist: event.target.value
    })
  }

  render() {

    return (
      <ContainerPrincipal>
        <h2>Crie uma playlist agora mesmo!</h2>

        <input
          value={this.state.inputPlaylist}
          onChange={this.onChangeNomePlaylist}
          placeholder="Digite o nome da sua playlist..."
        />
        <button onClick={this.createPlaylist}>CRIAR</button>

      </ContainerPrincipal>
    )
  }
}