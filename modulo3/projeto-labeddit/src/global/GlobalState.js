import axios from "axios"
import React, { useState } from "react"

import { BASE_URL } from "../constants/urls"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {

  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

  const getPosts = () => {
    const token = localStorage.getItem("token")
    const headers = { headers: { Authorization: token } }

    axios
      .get(`${BASE_URL}/posts`, headers)
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => { console.log(err.response) })
  }

  const getPostComments = (id) => {
    const token = localStorage.getItem("token")
    const headers = { headers: { Authorization: token } }

    axios
      .get(`${BASE_URL}/posts/${id}/comments`, headers)
      .then((res) => setComments(res.data))
      .catch((err) => { console.log(err.response) })
  }

  const states = {posts, comments}
  const setters = {setPosts, setComments}
  const requests = {getPosts, getPostComments}

  return(
    <GlobalStateContext.Provider value={{states, setters, requests}}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState