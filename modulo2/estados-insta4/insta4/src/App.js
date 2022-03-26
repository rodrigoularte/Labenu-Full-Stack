import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50?random=1',
        fotoPost: 'https://picsum.photos/200/150?random=2'
      },

      {
        nomeUsuario: 'rodrigo',
        fotoUsuario: 'https://picsum.photos/50/50?random=3',
        fotoPost: 'https://picsum.photos/200/150?random=4'
      },

      {
        nomeUsuario: 'mina',
        fotoUsuario: 'https://picsum.photos/50/50?random=5',
        fotoPost: 'https://picsum.photos/200/150?random=6'
      }
    ],

    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novoPosts = [...this.state.posts, novoPost]

    this.setState({
      posts: novoPosts,
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    })
  }

  //parei aqui

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })

    return (
      <MainContainer>
        <div>
          {listaDePosts}
        </div>
        <div>
          <input
          value={this.state.valorInputNome}
          onChange={}
          placeholder={"Nome"}
          />
          <input
          value={this.state.valorInputFotoUsuario}
          onChange={}
          placeholder={"Foto do usuário"}
          />
          <input
          value={this.state.valorInputFotoPost}
          onChange={}
          placeholder={"Foto do post"}
          />
          <button>Enviar</button>
        </div>
      </MainContainer>
    );
  }
}

export default App;
