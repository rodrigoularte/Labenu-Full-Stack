import React, { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Filter from "../../components/Filter/Filter"
import Header from "../../components/Header/Header"
import { api_key } from "../../constants/apiKey"
import { HomeContainer } from "./styled"
import MovieCard from "../../components/MovieCard/MovieCard"
import { goToMovieDetailPage } from "../../routes/coordinator"

const HomePage = () => {

  const navigate = useNavigate()

  const [movies, setMovies] = useState([])

  const getMovies = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?${api_key}`)
      .then((res) => {
        setMovies(res.data.results)

        console.log(res.data.results)
      })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => { getMovies() }, [])

  const movieList = (movies.length > 0) ?
    movies.map((movie) => {
      const poster = `https://image.tmdb.org/t/p/w200${movie.poster_path}`

      return (
        <MovieCard id={movie.id}
          poster={poster}
          title={movie.title}
          releaseDate={movie.release_date}
          goToMovieDetailPage={() => goToMovieDetailPage(navigate, movie.id)}
        />
      )
    }) : <h1>Nenhum filme encontrado</h1>

  return (
    <div>
      <Header />
      <Filter />
      <HomeContainer>
        {movieList}
      </HomeContainer>
    </div>
  )
}

export default HomePage