import React from "react"
import DetalhesPlaylistPage from "./pages/DetalhePlaylistPage/DetalhesPlaylistPage"
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage"

// font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;

export default class App extends React.Component {
  state = {
    paginaAtual: "playlists"
  }

  selecionaPagina = () => {
    switch (this.state.paginaAtual) {
      case "playlists":
        return <PlaylistPage />
      case "detalhes":
        return <DetalhesPlaylistPage />
      default:
        return <PlaylistPage />
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

