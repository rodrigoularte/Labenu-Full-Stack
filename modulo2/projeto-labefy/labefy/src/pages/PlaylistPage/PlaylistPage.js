import React from "react"
import axios from "axios"
import { urlBase } from "../../constants/urls.js"
import { NomePlaylist } from "./styled.js"
import CriePlaylist from "../../components/CriePlaylist.js"

const headers = {
  headers: {
    Authorization: "rodrigo-goularte-shaw"
  }
}

export default class PlaylistPage extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  getAllPlaylists = () => {
    axios
      .get(`${urlBase}`, headers)
      .then((res) =>
        this.setState({
          playlists: res.data.result.list
        })
      )
      .catch((err) => console.log(err.response))
  }

  render() {

    const listaDePlaylists = this.state.playlists.map((playlist) => {
      return <NomePlaylist key={playlist.id}>{playlist.name}</NomePlaylist>
    })

    return (
      <div>
        <CriePlaylist
          getAllPlaylists={this.getAllPlaylists()}
        />

        <div>
          <h3>Playlists:</h3>
          {listaDePlaylists}
        </div>
      </div>
    )
  }
}