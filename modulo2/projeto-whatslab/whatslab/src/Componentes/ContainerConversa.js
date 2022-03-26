import React from "react";
import styled from 'styled-components'

const Conversa = styled.div`
    border: 1px solid black;
    background-color: grey;
    width: 500px;
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

class ContainerConversa extends React.Component {
    state = {
        mensagens: [
            {
                remetente: "eu",
                conteudo: "olá, tudo bem?"
            }
        ],

        valorInputUsuario: "",
        valorInputMensagem: ""
    }

    adicionaMensagem = () => {
        const novaMensagem = {
            remetente: this.state.valorInputUsuario,
            conteudo: this.state.valorInputMensagem
        }

        const novoMensagens = [...this.state.mensagens, novaMensagem]

        this.setState({
            mensagens: novoMensagens,
            valorInputUsuario: "",
            valorInputMensagem: ""
        })
    }

    onChangeInputUsuario = (event) => {
        this.setState({ valorInputUsuario: event.target.value })
    }

    onChangeInputMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value })
    }

    render() {
        const listaDeMensagens = this.state.mensagens.map((mensagem) => {
            return (
                <p>
                    {mensagem.remetente}: {mensagem.conteudo}
                </p>
            )
        })

        return (
            <div>
                <Conversa>{listaDeMensagens}</Conversa>

                <ContainerInferior>
                    <input>
                        value={this.state.valorInputUsuario}
                        onChange={this.onChangeInputUsuario}
                        placeholder={"Usuário"}
                    </input>

                    <input>
                        value={this.state.valorInputMensagem}
                        onChange={this.onChangeInputMensagem}
                        placeholder={"Mensagem"}
                    </input>

                    <button onClick={this.adicionaMensagem}>Enviar</button>
                </ContainerInferior>
            </div>
        )
    }
}

export default ContainerConversa