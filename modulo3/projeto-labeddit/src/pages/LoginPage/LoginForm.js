import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import useForm from "../../hooks/useForm"
import { BASE_URL } from "../../constants/urls"
import { goToFeedPage} from "../../routes/coordinator"
import { GradientButton1, InputField } from "../../styles/styledDefault"


const LoginForm = () => {

  const navigate = useNavigate()

  const { form, onChange } = useForm({ email: "", password: "" })

  const onSubmitLogin = (event) => {
    event.preventDefault()

    axios
      .post(`${BASE_URL}/users/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        goToFeedPage(navigate)
      })
      .catch((err) => { alert("Cadastro não encontrado, tente novamente.") })
  }

  return (
    <form onSubmit={onSubmitLogin}>
      <InputField
        name="email"
        value={form.email}
        onChange={onChange}
        type="email"
        placeholder="E-mail"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        title="exemplo@exemplo.com"
        required
      />
      <InputField
        name="password"
        value={form.password}
        onChange={onChange}
        type="password"
        placeholder="Senha"
        required
      />
      <GradientButton1>Continuar</GradientButton1>
    </form>
  )
}

export default LoginForm