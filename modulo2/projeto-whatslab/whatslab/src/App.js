import styled from 'styled-components'
import './App.css';


const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: center;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const ContainerWhatslab = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  height: 100vh;
`

const Conversa = styled.div`
  background-color: grey;
  height: 95%;
`
const ContainerInferior = styled.div`
  display: flex;
    border: 1px solid black;
    max-width: 500px;
    height: 5%;
    align-self: center;
    justify-content: flex-end;
`

function App() {
  return (
    <ContainerPrincipal>
      <ContainerWhatslab>
        <Conversa></Conversa>
        <ContainerInferior>
          <input></input>
          <input></input>
          <button>Enviar</button>
        </ContainerInferior>
      </ContainerWhatslab>
    </ContainerPrincipal>
  );
}

export default App;
