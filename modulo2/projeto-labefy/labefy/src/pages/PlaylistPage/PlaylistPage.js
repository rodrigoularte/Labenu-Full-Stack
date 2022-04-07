import React from "react"
import axios from "axios"

const headers = {
  headers: {
    Authorization: "rodrigo-goularte-shaw"
  }
}

export default class PlaylistPage extends React.Component {
    state = {
        playlists: []
    }

    getAllPlaylists = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

      axios
      .get(url,headers)
    }

    render() {

        return (
            <div>
                <h2>Crie uma playlist agora mesmo!</h2>
                <input placeholder="Digite o nome da sua playlist..."></input>
                <button>Criar!</button>

                <div>
                    <h3>Playlists:</h3>
                </div>
            </div>
        )
    }
}