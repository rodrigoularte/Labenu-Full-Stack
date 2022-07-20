import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import { api_key } from "../../constants/apiKey"
import { CastContainer, MovieDetailContainer, MoviePoster, RecomendationsContainer, TrailerContainer } from "./styled"

const MovieDetailPage = () => {

  const navigate = useNavigate()

  const [movieDetails, setMovieDetails] = useState({})
  const [genres, setGenres] = useState([])
  const [movieYear, setMovieYear] = useState("")

  const pathParams = useParams()

  const getMovieDetail = async () => {
    try {
      const res = await axios
        .get(`https://api.themoviedb.org/3/movie/${pathParams.id}?${api_key}&language=pt-BR`)
        setMovieDetails(res.data)
        setGenres(res.data.genres)
        setMovieYear(res.data.release_date)

    } catch (error) { console.log(error) }
  }

  
  useEffect(() => { getMovieDetail() }, [])

  const poster = `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`
  
  const movieGenres = (genres.length > 0) ?
    movieDetails.genres.map((genre) => {
      return (
        ` ${genre.name}`
      )
    }) : "Carregando..."
  
  console.log(movieDetails)

  return (
    <div>
      <Header/>
      <MovieDetailContainer>
        <div>
          <h1>
            {(movieYear.length > 0) ? `${movieDetails.title} (${movieYear.slice(0,4)})` : "Carregando..." }
          </h1>
          <p>{`${movieDetails.release_date} | ${movieGenres} | ${movieDetails.runtime} min`}</p>
          <p>{movieDetails.vote_average} Avaliação dos usuários</p>
        </div>
        <div>
          <h3>Sinopse</h3>
          <p>{movieDetails.overview}</p>
        </div>
      </MovieDetailContainer>

      <MoviePoster src={poster} alt="" />

      <CastContainer>
        <h2>Elenco original</h2>
      </CastContainer>

      <TrailerContainer>
        <h2>Trailer</h2>
      </TrailerContainer>

      <RecomendationsContainer>
        <h2>Recomendações</h2>
      </RecomendationsContainer>
    </div>
  )
}

export default MovieDetailPage