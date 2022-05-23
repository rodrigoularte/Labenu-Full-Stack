import React, { useContext, useEffect} from "react"
import { useParams } from "react-router-dom"

import { useProtectedPage } from "../../hooks/useProtectedPage "
import PostCard from "../../components/PostCard/PostCard"
import { BodyContainer, ContentContainer, Line } from "../../styles/styledDefault"
import CommentCard from "../../components/CommentCard/CommentCard"
import CommentForm from "./CommentForm"
import GlobalStateContext from "../../global/GlobalStateContext"

const PostPage = () => {

  useProtectedPage()

  const pathParams = useParams()
  const { states, setters, requests } = useContext(GlobalStateContext)
  

  const filterPost = states.posts.filter((post) => {
    return post.id === pathParams.id
  })
  
  
  useEffect(() => {
    requests.getPosts()
    requests.getPostComments(pathParams.id)
  }, [requests.getPosts, requests.getPostComments])

  
  return (
    <BodyContainer>
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
              userVote={post.userVote}
            />
          )
        })}

        <CommentForm
          id={pathParams.id}
          getPostComments={requests.getPostComments}
        />

        <Line />

        {states.comments.map((comment) => {
          return (
            <CommentCard
              key={comment.id}
              id={comment.id}
              username={comment.username}
              title={comment.title}
              body={comment.body}
              voteSum={comment.voteSum}
              commentCount={comment.commentCount}
              userVote={comment.userVote}
            />
          )
        })}
      </ContentContainer>
    </BodyContainer>
  )
}

export default PostPage