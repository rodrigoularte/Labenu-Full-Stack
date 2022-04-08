import React from "react"
import DetalhesPlaylistPage from "./pages/DetalhePlaylistPage/DetalhesPlaylistPage"
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage"

// font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;

export default class App extends React.Component {
  state = {
    paginaAtual: "playlists",
    playlistId: "",
    playlistNome: ""
  }

  // irParaDetalhesPlaylist = (id) => {
  irParaDetalhesPlaylist = (id, nome) => {
    this.setState({
      paginaAtual: "detalhes",
      playlistId: id,
      playlistNome: nome
    })
  }

  irParaPlaylistPage = () => {
    this.setState({
      paginaAtual: "playlists",
      playlistId: "",
      playlistNome: ""
    })
  }

  selecionaPagina = () => {
    switch (this.state.paginaAtual) {
      case "playlists":
        return <PlaylistPage irParaDetalhesPlaylist={this.irParaDetalhesPlaylist} />
      case "detalhes":
        return (
          <DetalhesPlaylistPage
            id={this.state.playlistId}
            nome={this.state.playlistNome}
            irParaPlaylistPage={this.irParaPlaylistPage}
          />
        )
      default:
        return <PlaylistPage irParaDetalhesPlaylist={this.irParaDetalhesPlaylist} />
    }
  }

  render() {

    return (
      <div>
        {this.selecionaPagina()}
      </div>
    )
  }
}

