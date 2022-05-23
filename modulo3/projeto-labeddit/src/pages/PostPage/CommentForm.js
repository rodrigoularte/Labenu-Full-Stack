import React from "react"

import useForm from "../../hooks/useForm"
import { GradientButton2 } from "../../styles/styledDefault"
import { CommentContainer, Comment } from "./styled"
import { comment } from "../../services/posts"


const CommentForm = (props) => {

  const { form, onChange, clear } = useForm({ body: "" })

  const onSubmitComment = (event) => {
    event.preventDefault()

    comment(form, props.id, props.getPostComments, clear)
  }

  return (

    <CommentContainer>
        <form onSubmit={onSubmitComment}>
          <Comment
            name="body"
            value={form.body}
            onChange={onChange}
            placeholder="Adicionar comentário"
            required
          />
          <GradientButton2>Postar</GradientButton2>
        </form>
      </CommentContainer>
  )
}

export default CommentForm