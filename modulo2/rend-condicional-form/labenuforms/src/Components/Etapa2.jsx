import React from "react"
import { ContainerForm } from "./Etapa1"
import PerguntaAberta from "./PerguntaAberta";

export default class Etapa2 extends React.Component {
  render() {
    return (
      <ContainerForm>
        <h3>ETAPA 2: INFORMAÇÕES SOBRE O ENSINO SUPERIOR</h3>
        <PerguntaAberta pergunta={"1. Qual é o curso?"}/>
        <PerguntaAberta pergunta={"2. Qual é a unidade de ensino?"}/>
      </ContainerForm>
    );
  }
}
