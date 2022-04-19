import React from "react"
import axios from "axios"
import { urlBase } from "../../constants/urls"
import { AdicioneOff, BotaoVoltar, ContainerMusica, ContainerMusicas, ContainerPrincipal, Descricao, Musica } from "./styled"
import AdicioneMusica from "../../components/AdicioneMusica"

const headers = {
  headers: {
    Authorization: "rodrigo-goularte-shaw"
  }
}

export default class DetalhesPlaylistPage extends React.Component {

  state = {
    musicas: [],
    adicionar: false
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

  mostrarAdicionar = () => {
    this.setState({
      adicionar: !this.state.adicionar
    })
  }

  render() {

    const listaDeMusicas = this.state.musicas.map((musica) => {
      return (
        <Musica key={musica.id}>
          <audio controls>
            <source src={musica.url} type="audio/mpeg" />
          </audio>

          <Descricao>
            <p>{musica.name}</p>
            <p><b>{musica.artist}</b></p>
          </Descricao>

        </Musica>
      )
    })

    return (
      <ContainerPrincipal>
        <h1>{this.props.nome}</h1>

        {this.state.adicionar ?
          (<AdicioneMusica
            id={this.props.id}
            getPlaylistTracks={this.getPlaylistTracks}
            mostrarAdicionar={this.mostrarAdicionar}
          />) :
          (<AdicioneOff onClick={this.mostrarAdicionar}><h3>Adicione uma música</h3></AdicioneOff>)
        }
        

        {/* <AdicioneMusica
          id={this.props.id}
          getPlaylistTracks={this.getPlaylistTracks}
        /> */}

        <ContainerMusicas>{listaDeMusicas}</ContainerMusicas>

        <BotaoVoltar onClick={this.props.irParaPlaylistPage}>Voltar</BotaoVoltar>
      </ContainerPrincipal>
    )
  }
}