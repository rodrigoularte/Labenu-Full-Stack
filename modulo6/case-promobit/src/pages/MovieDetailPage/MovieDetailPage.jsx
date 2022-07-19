import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Filter from "../../components/Filter/Filter"
import Header from "../../components/Header/Header"
import { api_key } from "../../constants/apiKey"

const MovieDetailPage = () => {

  const navigate = useNavigate()

  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])

  const pathParams = useParams()

  const getMovieDetail = async () => {
    try {
      const res = await axios
        .get(`https://api.themoviedb.org/3/movie/${pathParams.id}?${api_key}&language=pt-BR`)
        setMovies(res.data)
        setGenres(res.data.genres)
        console.log(res.data)

    } catch (error) { console.log(error) }
  }

  
  useEffect(() => { getMovieDetail() }, [])

  const poster = `https://image.tmdb.org/t/p/w200${movies.poster_path}`
  
  const movieGenres = (genres.length > 0) ?
    movies.genres.map((movie) => {
      return (
        ` ${movie.name}`
      )
    }) : "Carregando..."

  return (
    <div>
      <Header/>
      <div>
        <img src={poster} alt="" />
      <h1>{movies.title}</h1>
      <p>{`${movies.release_date} | ${movieGenres} | ${movies.runtime} min`}</p>
      <p>{movies.vote_average} Avaliação dos usuários</p>
      <h3>Sinopse</h3>
      <p>{movies.overview}</p>
      
      </div>
    </div>
  )
}

export default MovieDetailPage