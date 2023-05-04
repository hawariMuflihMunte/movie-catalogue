class FavoriteMovieSearchPresenter {
  constructor ({
    favoriteMovies
  }) {
    this._listenToSearchRequestByUser()
    this._favoriteMovies = favoriteMovies
  }

  _listenToSearchRequestByUser () {
    this._queryElement = document.getElementById('query')

    this._queryElement.addEventListener('change', (event) => {
      this._searchMovies(event.target.value)
    })
  }

  _searchMovies (latestQuery) {
    this._latestQuery = latestQuery
    this._favoriteMovies.searcMovies(this.latestQuery)
  }

  _showFoundMovies (movies) {
    const html = movies.reduce(
      (carry, movie) => carry.concat('<li class="movie"></li>')
    )
    document.querySelector('.movies').innerHTML = html
  }

  get latestQuery () {
    return this._latestQuery
  }
}

export default FavoriteMovieSearchPresenter
