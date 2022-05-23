import React, { useContext, useEffect} from "react"

import { useProtectedPage } from "../../hooks/useProtectedPage "
import { BodyContainer, ContentContainer, Line } from "../../styles/styledDefault"
import PostForm from "./PostForm"
import PostCard from "../../components/PostCard/PostCard"
import GlobalStateContext from "../../global/GlobalStateContext"

const FeedPage = () => {

  useProtectedPage()

  const { states, setters, requests } = useContext(GlobalStateContext)

  useEffect(() => { requests.getPosts() }, [requests])


  return (
    <BodyContainer>
      <ContentContainer>

        <PostForm getPosts={requests.getPosts} />

        <Line />

        {states.posts.map((post) => {
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
    </BodyContainer>
  )
}

export default FeedPage