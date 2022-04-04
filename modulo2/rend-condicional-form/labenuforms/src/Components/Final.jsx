import React from "react"
import styled from "styled-components"
import { ContainerForm } from "./Etapa1"

export default class Final extends React.Component {
    render() {
        return (
            <ContainerForm>
                <h3>OBRIGADO!</h3>
                <p>Agradecemos por responder a este formulário! Em breve entraremos em contato</p>
            </ContainerForm>
        )
    }
}