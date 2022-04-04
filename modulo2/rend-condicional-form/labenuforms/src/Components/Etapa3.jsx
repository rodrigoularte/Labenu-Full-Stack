import React from "react";
import { ContainerForm } from "./Etapa1";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

export default class Etapa3 extends React.Component {
  render() {
    return (
      <ContainerForm>
        <h3>ETAPA 3: INFORMAÇÕES GERAIS DE ENSINO</h3>
        <PerguntaAberta
          pergunta={"1. Por que você não terminou um curso de graduação?"}
        />
        <PerguntaFechada
            pergunta={"2. Você fez algum curso complementar?"}
            opcoes={[
                "Curso técnico",
                "Cursos de inglês",
                "Não fiz curso complementar"
            ]}
        />
      </ContainerForm>
    );
  }
}
