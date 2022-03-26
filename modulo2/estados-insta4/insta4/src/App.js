import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  padding: 10px;

  input {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
  }

  button {
    display: flex;
  }
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

  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  }

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
        <FormContainer>
          <input
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome do usuário"}
          />
          <input
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Link da foto do usuário"}
          />
          <input
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Link da foto do post"}
          />
          <button onClick={this.adicionaPost}>Enviar</button>
        </FormContainer>
      </MainContainer>
    );
  }
}

export default App;
