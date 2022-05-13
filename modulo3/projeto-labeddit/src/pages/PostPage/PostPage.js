import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


import { BASE_URL } from "../../constants/urls"
import { useProtectedPage } from "../../hooks/useProtectedPage "
import PostCard from "../../components/PostCard/PostCard"
import { ContentContainer, Line } from "../../styles/styledDefault"
import CommentCard from "../../components/CommentCard/CommentCard"
import CommentForm from "./CommentForm"

const PostPage = () => {

  useProtectedPage()
  const pathParams = useParams()

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

  useEffect(() => { getPosts() }, [])


  const filterPost = posts.filter((post) => {
    return post.id === pathParams.id
  })


  const getPostComments = () => {
    const token = localStorage.getItem("token")
    const headers = { headers: { Authorization: token } }

    axios
      .get(`${BASE_URL}/posts/${pathParams.id}/comments`, headers)
      .then((res) => setComments(res.data))
      .catch((err) => { console.log(err.response) })
  }

  useEffect(() => { getPostComments() }, [])


  return (
    <ContentContainer>
      {filterPost.map((post) => {
        return (
          <PostCard
            key={post.id}
            id={post.id}
            username={post.username}
            title={post.title}
            body={post.body}
            voteSum={post.voteSum}
            commentCount={post.commentCount}
          />
        )
      })}

      <CommentForm
        id={pathParams.id}
        getPostComments={getPostComments}
      />

      <Line />

      {comments.map((comment) => {
        return (
          <CommentCard
            key={comment.id}
            id={comment.id}
            username={comment.username}
            title={comment.title}
            body={comment.body}
            voteSum={comment.voteSum}
            commentCount={comment.commentCount}
          />
        )
      })}
    </ContentContainer>
  )
}

export default PostPage