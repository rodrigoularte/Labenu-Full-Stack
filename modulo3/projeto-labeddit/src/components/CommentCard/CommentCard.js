import React from "react"
import axios from "axios"

import { BASE_URL } from "../../constants/urls"
import { PostListContainer, CommentUserName, CommentText, BottomContainer, VoteContainer, CommentCount, VoteUp, VoteDown} from "./styled"
import {BsShift, BsShiftFill} from "react-icons/bs"


const CommentCard = (props) => {

  const UpVote = (id, userVote) => {

    if(userVote) {{
      const token = localStorage.getItem("token")
      const headers = { headers: { Authorization: token } }

      axios
      .delete(`${BASE_URL}/comments/${id}/votes`, headers)
      .then(() => {
        console.log("Voto retirado")
      })
      .catch((err) => { console.log(err.response) })
    } {
      const token = localStorage.getItem("token")
      const headers = { headers: { Authorization: token } }
      const body = {"direction": 1}
  
      axios
        .post(`${BASE_URL}/comments/${id}/votes`, body, headers)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => { console.log(err.response) })
    }}
    else {
      const token = localStorage.getItem("token")
      const headers = { headers: { Authorization: token } }
      const body = {"direction": 1}
  
      axios
        .post(`${BASE_URL}/comments/${id}/votes`, body, headers)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => { console.log(err.response) })
    }
  }

  const DownVote = (id, userVote) => {

    if(userVote) {{
      const token = localStorage.getItem("token")
      const headers = { headers: { Authorization: token } }

      axios
      .delete(`${BASE_URL}/comments/${id}/votes`, headers)
      .then(() => {
        console.log("Voto retirado")
      })
      .catch((err) => { console.log(err.response) })
    } {
      const token = localStorage.getItem("token")
      const headers = { headers: { Authorization: token } }
      const body = {"direction": -1}

      axios
        .post(`${BASE_URL}/comments/${id}/votes`, body, headers)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => { console.log(err.response) })
    }}
    else if(userVote === null) {
      const token = localStorage.getItem("token")
      const headers = { headers: { Authorization: token } }
      const body = {"direction": -1}

      axios
        .post(`${BASE_URL}/comments/${id}/votes`, body, headers)
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
      <CommentUserName>Enviado por: {props.username}</CommentUserName>

      <div>
        <CommentText>{props.body}</CommentText>
      </div>

      <BottomContainer>
        <VoteContainer>
          <VoteUp onClick={() => UpVote(props.id, props.userVote)}>
            {props.userVote === 1 ? <BsShiftFill color="green"/> : <BsShift/>}
          </VoteUp>
          <CommentCount>{props.voteSum === null ? "0" : props.voteSum}</CommentCount>
          <VoteDown onClick={() => DownVote(props.id, props.userVote)}>
            {props.userVote === -1 ? <BsShiftFill color="red"/> : <BsShift/>}
          </VoteDown>
        </VoteContainer>
      </BottomContainer>
    </PostListContainer >

  )
}

export default CommentCard