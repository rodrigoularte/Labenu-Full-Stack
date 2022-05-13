import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useProtectedPage } from "../../hooks/useProtectedPage "
import { BASE_URL } from "../../constants/urls"
import { ContentContainer, Line } from "../../styles/styledDefault"
import PostForm from "./PostForm"
import PostCard from "../../components/PostCard/PostCard"

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

  useEffect(() => { getPosts() }, [getPosts])

  return (
    <ContentContainer>

      <PostForm getPosts={getPosts} />

      <Line />

      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            id={post.id}
            username={post.username}
            title={post.title}
            body={post.body}
            voteSum={post.voteSum}
            commentCount={post.commentCount}
            userVote={post.userVote}
          />
        )
      })}

    </ContentContainer>
  )
}

export default FeedPage