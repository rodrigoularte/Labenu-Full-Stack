import React from "react"
import { useNavigate } from "react-router-dom"

import { goToPostPage } from "../../routes/coordinator"
import { CommentContainer, PostListContainer, BottomContainer, VoteContainer} from "./styled"

const PostCard = (props) => {

  const navigate = useNavigate()

  return (
    <PostListContainer
      key={props.id}
      onClick={() => goToPostPage(navigate)}
    >
      <p>Enviado por: {props.username}</p>

      <div>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div>

      <BottomContainer>
        <VoteContainer>
          {props.voteSum}
        </VoteContainer>
        <CommentContainer>
          {props.commentCount}
        </CommentContainer>
      </BottomContainer>
    </PostListContainer >

  )
}

export default PostCard