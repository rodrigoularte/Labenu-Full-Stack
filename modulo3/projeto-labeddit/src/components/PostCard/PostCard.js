import React from "react"
import { useNavigate } from "react-router-dom"

import { goToPostPage } from "../../routes/coordinator"
import { CommentContainer, PostListContainer, BottomContainer, VoteContainer} from "./styled"

const PostCard = (props) => {

  const navigate = useNavigate()

  return (
    <PostListContainer
      key={props.id}
      // onClick={() => goToPostPage(navigate, props.id)}
    >
      <div onClick={() => goToPostPage(navigate, props.id)}>
        <p>Enviado por: {props.username}</p>

        <div>
          <h3>{props.title}</h3>
          <p>{props.body}</p>
        </div>
      </div>

      <BottomContainer>
        <VoteContainer>
          <button>A</button>
          {props.voteSum === null ? "0" : props.voteSum}
          <button>B</button>
        </VoteContainer>
        <CommentContainer>
          {props.commentCount === null ? "0" : props.commentCount}
        </CommentContainer>
      </BottomContainer>
    </PostListContainer >

  )
}

export default PostCard