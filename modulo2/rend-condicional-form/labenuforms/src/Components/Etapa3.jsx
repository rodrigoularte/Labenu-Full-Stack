import React from "react"
import styled from "styled-components"
import { ContainerForm } from "./Etapa1"

export default class Etapa3 extends React.Component {
    render() {
        return (
            <ContainerForm>
                <h3>ETAPA 3: INFORMAÇÕES GERAIS DE ENSINO</h3>
                <div>
                    <p>1. Por que você não terminou um curso de graduação?</p>
                    <input />
                </div>
                <div>
                    <p>2. Você fez algum curso complementar?</p>
                    <select>
                        <option value="Curso técnico">Curso técnico</option>
                        <option value="Cursos de inglês">Cursos de inglês</option>
                        <option value="Não fiz curso complementar">Não fiz curso complementar</option>
                    </select>
                </div>
            </ContainerForm>
        )
    }
}