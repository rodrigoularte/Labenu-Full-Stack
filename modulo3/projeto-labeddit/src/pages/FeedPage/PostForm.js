import React from "react"
// import { useNavigate } from "react-router-dom"

import useForm from "../../hooks/useForm"
import { GradientButton2 } from "../../styles/styledDefault"
import { PostContainer, Post, PostTitle } from "./styled"
import { post } from "../../services/posts"


const PostForm = (props) => {

  // const navigate = useNavigate()

  const { form, onChange, clear } = useForm({ title: "", body: "" })

  const onSubmitPost = (event) => {
    event.preventDefault()

    post(form, props.getPosts, clear)
  }

  return (

    <PostContainer>
      <form onSubmit={onSubmitPost}>
        <PostTitle
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="Título"
          required
        />
        <Post
          name="body"
          value={form.body}
          onChange={onChange}
          placeholder="Escreva seu post..."
          required
        />
        <GradientButton2>Postar</GradientButton2>
      </form>
    </PostContainer>


    // <form onSubmit={onSubmitLogin}>
    //   <InputField
    //     name="email"
    //     value={form.email}
    //     onChange={onChange}
    //     type="email"
    //     placeholder="E-mail"
    //     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    //     title="exemplo@exemplo.com"
    //     required
    //   />
    //   <InputField
    //     name="password"
    //     value={form.password}
    //     onChange={onChange}
    //     type="password"
    //     placeholder="Senha"
    //     required
    //   />
    //   <GradientButton1>Continuar</GradientButton1>
    // </form>
  )
}

export default PostForm