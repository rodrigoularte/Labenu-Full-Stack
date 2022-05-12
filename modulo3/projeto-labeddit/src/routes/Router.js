import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "../components/Header/Header"
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

const Router = () => {

  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<FeedPage/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="post/:id" element={<PostPage/>} />
        <Route path="cadastro" element={<SignUpPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router