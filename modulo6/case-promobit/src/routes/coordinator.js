export const goToHomePage = (navigate) => {
  navigate("/")
}

export const goToMovieDetailPage = (navigate, id) => {
  navigate(`/movie/${id}`)
  window.scrollTo(0, 0)
}