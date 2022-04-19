import React from "react"
import axios from "axios"
import { urlBase } from "../constants/urls"
import styled from "styled-components"

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2d2d2d;
  border-radius: 10px;
  min-height: 80px;
  width: 270px;
  padding: 20px;
  align-items: center;
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

const ContainerHeader = styled.div`
  display: flex;
  gap: 10px;

  button {
  padding: 5px 10px;
  }
`

const headers = {
  headers: {
    Authorization: "rodrigo-goularte-shaw"
  }
}

export default class AdicioneMusica extends React.Component {

  state = {
    inputMusica: "",
    inputArtista: "",
    inputUrl: ""
  }

  addTrackToPlaylist = () => {
    const body = {
      name: this.state.inputMusica,
      artist: this.state.inputArtista,
      url: this.state.inputUrl
    }

    axios
      .post(`${urlBase}/${this.props.id}/tracks`, body, headers)
      .then(() => {
        alert("Musica adicionada!")
        this.setState({inputMusica: "", inputArtista: "", inputUrl: ""})
        this.props.getPlaylistTracks()
      })
      .catch(() => alert("Algo deu errado, tente novamente."))
  }

  onChangeMusica = (event) => {
    this.setState({
      inputMusica: event.target.value
    })
  }

  onChangeArtista = (event) => {
    this.setState({
      inputArtista: event.target.value
    })
  }

  onChangeUrl = (event) => {
    this.setState({
      inputUrl: event.target.value
    })
  }



  render() {
    return (
      <ContainerPrincipal>
        <ContainerHeader>
          <h3>Adicione uma música</h3>
          <button onClick={this.props.mostrarAdicionar}>X</button>
        </ContainerHeader>

        <input value={this.state.inputMusica} onChange={this.onChangeMusica} placeholder="Nome da música" />

        <input value={this.state.inputArtista} onChange={this.onChangeArtista} placeholder="Nome do artista/banda" />

        <input value={this.state.inputUrl} onChange={this.onChangeUrl} placeholder="url da música" />

        <button onClick={this.addTrackToPlaylist}>ADICIONAR</button>
      </ContainerPrincipal>
    )
  }
}