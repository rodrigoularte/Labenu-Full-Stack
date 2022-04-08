import React from "react"
import axios from "axios"
import { urlBase } from "../../constants/urls"
import { ContainerMusica } from "./styled"
import AdicioneMusica from "../../components/AdicioneMusica"

const headers = {
  headers: {
    Authorization: "rodrigo-goularte-shaw"
  }
}

export default class DetalhesPlaylistPage extends React.Component {

  state = {
    musicas: []
  }

  componentDidMount() {
    this.getPlaylistTracks()
  }

  getPlaylistTracks = () => {
    axios
      .get(`${urlBase}/${this.props.id}/tracks`, headers)
      .then((res) => {
        this.setState({
          musicas: res.data.result.tracks
        })
      })
      .catch((err) => console.log(err.response))
  }

  render() {

    const listaDeMusicas = this.state.musicas.map((musica) => {
      return (
        <ContainerMusica key={musica.id}>
          <audio controls>
            <source src={musica.url} type="audio/mpeg" />
          </audio>

          <p>{musica.name}</p>
          <p>{musica.artist}</p>

        </ContainerMusica>
      )
    })

    return (
      <div>
        <h2>{this.props.nome}</h2>

        <AdicioneMusica
          id={this.props.id}
          getPlaylistTracks={this.getPlaylistTracks}
        />

        <p>{listaDeMusicas}</p>

        <button onClick={this.props.irParaPlaylistPage}>Voltar</button>
      </div>
    )
  }
}