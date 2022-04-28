import React, { useState } from "react"
import axios from "axios"
import Header from "../components/Header"
import { urlBase } from "../constants/constants"
import { useNavigate } from "react-router-dom"
import { goToAdminHomePage } from "../routes/coordinator"
import useForm from "../hooks/useForm"

const LoginPage = () => {

  const navigate = useNavigate()

  // custom hook useForm
  const {form, onChange} = useForm({email: "", password: ""})

  const onSubmitLogin = (event) => {
    //bloqueia o comportamento padrão do form
    event.preventDefault()
  
    axios
    .post(`${urlBase}/login`, form)
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
              name="email"
              value={form.email}
              type="email"
              onChange={onChange}
              placeholder="E-mail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="exemplo@exemplo.com"
              required
            />
            <input
              name="password"
              value={form.password}
              type="password"
              onChange={onChange}
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