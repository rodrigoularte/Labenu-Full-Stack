import React, { useState } from "react"
import axios from "axios"
import Header from "../components/Header"
import { urlBase } from "../constants/constants"
import { useNavigate } from "react-router-dom"
import { goToAdminHomePage } from "../routes/coordinator"

const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitLogin = (event) => {
    //bloqueia o comportamento padrão do form
    event.preventDefault()

    const body = {
      email: email,
      password: password
    }
    
    axios
    .post(`${urlBase}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      goToAdminHomePage(navigate)
    })
    .catch((err) => {alert(`ERRO! ${err.response.data.message}`)})
  }


  return (
    <div>
      <Header />
      <div> 
        <div>
          <form onSubmit={onSubmitLogin}>
            <h2>Login</h2>
            <input
              value={email}
              type="email"
              onChange={onChangeEmail}
              placeholder="E-mail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="exemplo@exemplo.com"
              required
            />
            <input
              value={password}
              type="password"
              onChange={onChangePassword}
              placeholder="Senha"
              required
            />
            <button>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage