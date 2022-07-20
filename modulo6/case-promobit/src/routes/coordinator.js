export const goToHomePage = (navigate) => {
  navigate("/")
}

export const goToMovieDetailPage = (navigate, id) => {
  navigate(`/movie/${id}`)
}