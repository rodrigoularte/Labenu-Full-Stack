import axios from "axios"

import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator"


export const login = (body, navigate) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      goToFeedPage(navigate)
    })
    .catch(() => { alert("Cadastro não encontrado, tente novamente.") })
}

export const signUp = (body, navigate) => {
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then(() => {
      alert("Cadastro realizado com sucesso!")
      goToFeedPage(navigate)
    })
    .catch(() => { alert(`ERRO! Tente fazer um novo cadastro`) })
}