import React from "react"

import logoLabeddit from "../../assets/logo-labeddit.png"
import { Logo, PageContainer } from "./styled"

const LoginPage = () => {

  return(
    <PageContainer>
      <div>
        <Logo src={logoLabeddit} alt="logo-labeddit"/>
        <h1>LabEddit</h1>
        <p>O projeto de rede social da Labenu</p>
      </div>
      
      <form>
        <input
          placeholder="Nome"
        />
        <input
          placeholder="Senha"
        />
        <button>Continuar</button>
      </form>

      <hr/>

      <button>Crie uma conta!</button>
    </PageContainer>
  )
}

export default LoginPage