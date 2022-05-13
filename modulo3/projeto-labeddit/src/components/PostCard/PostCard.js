import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import { BASE_URL } from "../../constants/urls"
import { goToPostPage } from "../../routes/coordinator"
import { CommentContainer, PostListContainer, BottomContainer, VoteContainer, VoteUp, VoteDown, UserName, TitleAndPost, VoteSum, CommentCount} from "./styled"
import {BiCommentDetail} from "react-icons/bi"
import {BsShift, BsShiftFill} from "react-icons/bs"

const PostCard = (props) => {

  const navigate = useNavigate()

  const UpVote = (id, userVote) => {

    if(userVote) {
      const token = localStorage.getItem("token")
      const headers = { headers: { Authorization: token } }

      axios
      .delete(`${BASE_URL}/posts/${id}/votes`, headers)
      .then(() => {
        console.log("Voto retirado")
      })
      .catch((err) => { console.log(err.response) })
    } else {
      const token = localStorage.getItem("token")
      const headers = { headers: { Authorization: token } }
      const body = {"direction": 1}
  
      axios
        .post(`${BASE_URL}/posts/${id}/votes`, body, headers)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => { console.log(err.response) })
    }
  }

  const DownVote = (id, userVote) => {

    if(userVote) {
      const token = localStorage.getItem("token")
      const headers = { headers: { Authorization: token } }

      axios
      .delete(`${BASE_URL}/posts/${id}/votes`, headers)
      .then(() => {
        console.log("Voto retirado")
      })
      .catch((err) => { console.log(err.response) })
    } else {
      const token = localStorage.getItem("token")
      const headers = { headers: { Authorization: token } }
      const body = {"direction": -1}

      axios
        .post(`${BASE_URL}/posts/${id}/votes`, body, headers)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => { console.log(err.response) })
    }
  }

  return (
    <PostListContainer
      key={props.id}
    >
      <div onClick={() => goToPostPage(navigate, props.id)}>
        <UserName>Enviado por: {props.username}</UserName>

        <TitleAndPost>
          <h3>{props.title}</h3>
          <p>{props.body}</p>
        </TitleAndPost>
      </div>

      <BottomContainer>
        <VoteContainer>
          <VoteUp onClick={() => UpVote(props.id, props.userVote)}>
            {props.userVote === 1 ? <BsShiftFill color="green"/> : <BsShift/>}
          </VoteUp>
            <VoteSum>{props.voteSum === null ? "0" : props.voteSum}</VoteSum>
          <VoteDown onClick={() => DownVote(props.id, props.userVote)}>
            {props.userVote === -1 ? <BsShiftFill color="red"/> : <BsShift/>}
          </VoteDown>
        </VoteContainer>
        <CommentContainer>
          <BiCommentDetail color="black"/>
          <CommentCount>{props.commentCount === null ? "0" : props.commentCount}</CommentCount>
        </CommentContainer>
      </BottomContainer>
    </PostListContainer >

  )
}

export default PostCard