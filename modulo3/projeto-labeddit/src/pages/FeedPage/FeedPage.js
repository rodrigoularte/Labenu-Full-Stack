import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PostCard from "../../components/PostCard/PostCard"

import { BASE_URL } from "../../constants/urls"
import { useProtectedPage } from "../../hooks/useProtectedPage "
import { ContentContainer, GradientButton2, Line } from "../../styles/styledDefault"
import PostForm from "./PostForm"

const FeedPage = () => {

  useProtectedPage()
  const navigate = useNavigate()

  const [posts, setPosts] = useState([])

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

  useEffect(() => { getPosts() }, [navigate])

  const postList = posts.map((post) => {
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
  })

  return (
    <ContentContainer>

      <PostForm getPosts={getPosts}/>

      <Line/>

      {postList}

    </ContentContainer>
  )
}

export default FeedPage