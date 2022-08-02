import React from "react"
import { BottomContainer, MovieCardContainer, MovieReleaseDate, Poster } from "./styled"

const MovieCard = (props) => {

  return (
    <MovieCardContainer
      key={props.id}
      onClick={props.goToMovieDetailPage}
    >
      <Poster src={props.poster} alt={props.title} />
      <BottomContainer>
        <h4>{props.title}</h4>
        <MovieReleaseDate>{props.releaseDate}</MovieReleaseDate>
      </BottomContainer>
    </MovieCardContainer>
  )
}

export default MovieCard