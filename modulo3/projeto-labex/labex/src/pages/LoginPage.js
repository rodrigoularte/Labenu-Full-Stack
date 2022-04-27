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

  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: password
    }

    axios
    .post(`${urlBase}/login`, body)
    .then((res) => {
      console.log('deu certo', res.data.token)
      localStorage.setItem("token", res.data.token)
      goToAdminHomePage(navigate)
    })
    .catch((err) => {console.log('erro', err.response)})
  }

  return (
    <div>
      <Header />
      <div> 
        <div>
          <h2>Login</h2>
          <input value={email} onChange={onChangeEmail} type="email" placeholder="E-mail" />
          <input value={password} onChange={onChangePassword} type="password" placeholder="Senha" />
          <button onClick={onSubmitLogin}>Entrar</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage