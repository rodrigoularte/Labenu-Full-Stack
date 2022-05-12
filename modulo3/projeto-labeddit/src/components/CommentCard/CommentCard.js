import React from "react"

import { PostListContainer, BottomContainer, VoteContainer} from "./styled"

const CommentCard = (props) => {

  return (
    <PostListContainer
      key={props.id}
    >
      <p>Enviado por: {props.username}</p>

      <div>
        <p>{props.body}</p>
      </div>

      <BottomContainer>
        <VoteContainer>
          {props.voteSum === null ? "0" : props.voteSum}
        </VoteContainer>
      </BottomContainer>
    </PostListContainer >

  )
}

export default CommentCard