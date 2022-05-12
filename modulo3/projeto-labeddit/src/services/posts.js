import axios from "axios"

import { BASE_URL } from "../constants/urls"

export const post = (body, getPosts, clear) => {
  const token = localStorage.getItem("token")
  const headers = { headers: { Authorization: token } }

  axios
    .post(`${BASE_URL}/posts`, body, headers)
    .then(() => {
      getPosts()
      clear()
    })
    .catch((err) => { console.log(err.response) })
}