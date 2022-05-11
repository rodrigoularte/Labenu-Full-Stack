import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PostCard from "../../components/PostCard/PostCard"

import { BASE_URL } from "../../constants/urls"
import { useProtectedPage } from "../../hooks/useProtectedPage "
import { ContentContainer, GradientButton2, Line } from "../../styles/styledDefault"
import { PostContainer, Post } from "./styled"

const FeedPage = () => {

  useProtectedPage()
  // const navigate = useNavigate()

  const [posts, setPosts] = useState([])

  const getPosts = () => {
    const token = localStorage.getItem("token")
    const headers = { headers: { Authorization: token } }

    axios
      .get(`${BASE_URL}/posts`, headers)
      .then((res) => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch((err) => { console.log(err.response) })
  }

  useEffect(() => { getPosts() }, [])

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

      <PostContainer>
        <form>
          <Post placeholder="Escreva seu post..."/>
          <GradientButton2>Postar</GradientButton2>
        </form>
      </PostContainer>

      <Line/>

      {postList}

    </ContentContainer>
  )
}

export default FeedPage