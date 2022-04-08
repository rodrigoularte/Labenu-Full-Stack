import React from "react"
import axios from "axios"
import { urlBase } from "../constants/urls"

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
      .catch("Algo deu errado, tente novamente.")
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
      <div>
        <p>Adicione uma música</p>

        {/* {this.props.id} */}

        <input value={this.state.inputMusica} onChange={this.onChangeMusica} placeholder="Nome da música" />

        <input value={this.state.inputArtista} onChange={this.onChangeArtista} placeholder="Nome do artista/banda" />

        <input value={this.state.inputUrl} onChange={this.onChangeUrl} placeholder="url da música" />

        <button onClick={this.addTrackToPlaylist}>ADICIONAR</button>
      </div>
    )
  }
}