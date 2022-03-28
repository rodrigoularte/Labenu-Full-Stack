import React from "react";
import styled from "styled-components";
import { ContainerForm } from "./Etapa1";

export default class Etapa2 extends React.Component {
  render() {
    return (
      <ContainerForm>
        <h3>ETAPA 2: INFORMAÇÕES SOBRE O ENSINO SUPERIOR</h3>
        <div>
          <p>1. Qual é o curso?</p>
          <input />
        </div>
        <div>
          <p>2. Qual é a unidade de ensino?</p>
          <input />
        </div>
      </ContainerForm>
    );
  }
}
