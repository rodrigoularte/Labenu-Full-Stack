import React from "react"
import { MovieCardContainer } from "./styled"

const MovieCard = (props) => {

  return (
    <MovieCardContainer
      key={props.id}
      onClick={props.goToMovieDetailPage}
    >
      <img src={props.poster} alt="" />
      <div>
        <h4>{props.title}</h4>
        <p>{props.releaseDate}</p>
      </div>
    </MovieCardContainer>
  )
}

export default MovieCard