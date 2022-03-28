import React from "react"
import styled from "styled-components"

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
        justify-content: space-around;justify-content: space-around;
        align-items: center;
    }
`

export default class Etapa1 extends React.Component {
    render() {
        return (
            <ContainerForm>
                <h3>ETAPA 1: DADOS GERAIS</h3>
                <div>
                    <p>1. Qual é o seu nome?</p>
                    <input />
                </div>
                <div>
                    <p>2. Qual é a sua idade?</p>
                    <input />
                </div>
                <div>
                    <p>3. Qual é o seu email?</p>
                    <input />
                </div>
                <div>
                    <p>4. Qual é o seu grau de escolaridade?</p>
                    <select>
                        <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                        <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                        <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                        <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                    </select>
                </div>
            </ContainerForm>
        )
    }
}
