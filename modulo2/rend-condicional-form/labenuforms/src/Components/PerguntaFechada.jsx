import React from "react"

export default class PerguntaFechada extends React.Component {
    
    render() {
        //pega o array opcoes
        const listaDeOpcoes = this.props.opcoes.map((opcao) => {
            return(
                <option value="">{opcao}</option>
            )
        })

        return (
            <div>
                <p>{this.props.pergunta}</p>
                <select>
                    {listaDeOpcoes}
                </select>
            </div>
        )
    }
}