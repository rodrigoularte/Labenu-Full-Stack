import './App.css';
import React from 'react';
import Cadastro from './Components/Cadastro';
import ListaDeUsuarios from './Components/ListaDeUsuarios';


class App extends React.Component {

  state = {
    pagina: "cadastro"
  }

  irParaLista = () => {
    this.setState({
      pagina: "lista"
    })
  }

  irParaCadastro = () => {
    this.setState({
      pagina: "cadastro"
    })
  }


  render() {
    let secao
    switch (this.state.pagina) {
      case "lista":
        secao = <ListaDeUsuarios irParaCadastro={this.irParaCadastro}/>
        break;
      case "cadastro":
        secao =
        <Cadastro irParaLista={this.irParaLista}
        />
        break
      default:
        secao = <p>Nenhuma seção selecionada</p>
        break;
    }

    return (
      <div>
        {secao}
      </div>
    )
  }
}

export default App;
