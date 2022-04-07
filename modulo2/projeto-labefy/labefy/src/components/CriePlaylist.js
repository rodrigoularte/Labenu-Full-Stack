import React from "react"
import axios from "axios"
import { urlBase } from "../constants/urls.js"

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
    .then((res) => {
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
      <div>
        <h2>Crie uma playlist agora mesmo!</h2>
        <input
        value={this.state.inputPlaylist}
        onChange={this.onChangeNomePlaylist}
        placeholder="Digite o nome da sua playlist..."
        />
        <button onClick={this.createPlaylist}>Criar!</button>
      </div>
    )
  }
}