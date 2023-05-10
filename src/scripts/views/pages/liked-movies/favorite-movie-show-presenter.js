class FavoriteMovieShowPresenter {
  constructor ({
    view,
    favoriteMovies
  }) {
    this._view = view
    this._favoriteMovies = favoriteMovies

    const movies = this._favoriteMovies.getAllMovies()

    this._displayMovies(movies)
  }

  _displayMovies (movies) {
    this._view.showFavoriteMovies(movies)
  }
}

export default FavoriteMovieShowPresenter
