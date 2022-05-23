import React from "react"

import useForm from "../../hooks/useForm"
import { GradientButton2 } from "../../styles/styledDefault"
import { PostContainer, Post, PostTitle } from "./styled"
import { post } from "../../services/posts"


const PostForm = (props) => {

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
  )
}

export default PostForm