import React from "react"
import { useNavigate } from "react-router-dom"

import useForm from "../../hooks/useForm"
import { GradientButton1, InputField } from "../../styles/styledDefault"
import { login } from "../../services/users"


const LoginForm = () => {

  const navigate = useNavigate()

  const { form, onChange } = useForm({ email: "", password: "" })

  const onSubmitLogin = (event) => {
    event.preventDefault()

    login(form, navigate)
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