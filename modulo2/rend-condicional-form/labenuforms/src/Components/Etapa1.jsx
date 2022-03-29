import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta"
import PerguntaFechada from "./PerguntaFechada";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 16px;

  h3 {
    padding: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    height: 4em;
    justify-content: space-around;
    justify-content: space-around;
    align-items: center;
  }
`;

export default class Etapa1 extends React.Component {
    render() {
        return (
            <ContainerForm>
                <h3>ETAPA 1: DADOS GERAIS</h3>
                <PerguntaAberta pergunta={"1. Qual é o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual é a sua idade?"} />
                <PerguntaAberta pergunta={"3. Qual é o seu email?"} />
                <PerguntaFechada
                    pergunta={"4. Qual é o seu grau de escolaridade?"}
                    opcoes={[
                        "Ensino Médio Incompleto",
                        "Ensino Médio Completo",
                        "Ensino Superior Incompleto",
                        "Ensino Superior Completo"
                    ]}
                />
            </ContainerForm>
        );
    }
}
