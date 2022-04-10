import React from "react"
import axios from "axios"
import { urlBase } from "../../constants/urls.js"
import { ContainerPlaylists, ContainerPrincipal, CardPlaylist, Playlists, Botoes } from "./styled.js"
import CriePlaylist from "../../components/CriePlaylist.js"
import trashCan from "../../constants/bin.png"

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
        <CardPlaylist>
          <h3
            key={playlist.id}
            // onClick={() => this.props.irParaDetalhesPlaylist(playlist.id, playlist.name)}
          >{playlist.name}</h3>

          <Botoes>
            <button onClick={() => this.props.irParaDetalhesPlaylist(playlist.id, playlist.name)}>Abrir</button>
            <img src={trashCan} alt="deletar" onClick={() => this.deletePlaylist(playlist.id)}/>
          </Botoes>
        </CardPlaylist>
      )
    })

    return (
      <ContainerPrincipal>

        <h1>Seja bem-vindo(a) ao Labefy</h1>

        <CriePlaylist
          getAllPlaylists={this.getAllPlaylists()}
        />

        <ContainerPlaylists>
          <h2>{this.state.quantidade} playlists</h2>
          <Playlists>
            {listaDePlaylists}
          </Playlists>
        </ContainerPlaylists>
        
      </ContainerPrincipal>
    )
  }
}