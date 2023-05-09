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

  async _searchMovies (latestQuery) {
    this._latestQuery = latestQuery.trim()

    let foundMovies

    if (this._latestQuery.length > 0) {
      foundMovies = await this._favoriteMovies.searchMovies(this._latestQuery)
    } else {
      foundMovies = await this._favoriteMovies.getAllMovies()
    }

    this._showFoundMovies(foundMovies)
  }

  _showFoundMovies (movies) {
    if (!movies) {
      return false
    }

    /**
     * For debugging purposes only
     *
     * Remove this comment below if
     * you want to see what data is
     * passed
     */
    // console.log(movies)

    let html

    if (movies.length > 0) {
      html = movies.reduce(
        (carry, movie) => carry.concat(`
          <li class="movie">
            <span class="movie__title">${movie.title || '-'}</span>
          </li>
        `),
        ''
      )
    } else {
      html = '<div class="movies__not__found">Film tidak ditemukan</div>'
    }

    document.querySelector('.movies').innerHTML = html

    document.getElementById('movie-search-container')
      .dispatchEvent(new Event('movies:searched:updated'))
  }

  get latestQuery () {
    return this._latestQuery
  }
}

export default FavoriteMovieSearchPresenter
