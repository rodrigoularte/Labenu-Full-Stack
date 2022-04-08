import React from "react"
import axios from "axios"
import { urlBase } from "../../constants/urls.js"
import { ContainerPrincipal, NomePlaylist } from "./styled.js"
import CriePlaylist from "../../components/CriePlaylist.js"

const headers = {
  headers: {
    Authorization: "rodrigo-goularte-shaw"
  }
}

export default class PlaylistPage extends React.Component {
  state = {
    playlists: [],
    quantidade: 0
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  getAllPlaylists = () => {
    axios
      .get(`${urlBase}`, headers)
      .then((res) =>
        this.setState({
          playlists: res.data.result.list,
          quantidade: res.data.result.quantity
        })
      )
      .catch((err) => console.log(err.response))
  }

  deletePlaylist = (id) => {
    if (window.confirm("Tem certeza de que deseja deletar esta playlist?")) {
      axios
        .delete(`${urlBase}/${id}`, headers)
        .then(() => {
          this.getAllPlaylists()
          alert("Playlist deletada com sucesso!")
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    } else {
      alert("Operação cancelada.")
    }
  }

  render() {

    // const quantidadePlaylists = this.state.playlists.result.
    // console.log(quantidadePlaylists)

    const listaDePlaylists = this.state.playlists.map((playlist) => {
      return (
        <NomePlaylist>
          <div
            key={playlist.id}
            onClick={() => this.props.irParaDetalhesPlaylist(playlist.id, playlist.name)}
          >{playlist.name}</div>

          <button onClick={() => this.deletePlaylist(playlist.id)}>Deletar</button>
        </NomePlaylist>
      )
    })

    return (
      <ContainerPrincipal>

        <h1>Seja bem-vindo(a) ao Labefy</h1>

        <CriePlaylist
          getAllPlaylists={this.getAllPlaylists()}
        />

        <div>
          <h3>{this.state.quantidade} playlists</h3>
          {listaDePlaylists}
        </div>
        
      </ContainerPrincipal>
    )
  }
}