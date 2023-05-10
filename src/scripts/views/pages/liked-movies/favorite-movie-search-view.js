class FavoriteMovieSearchView {
  getTemplate () {
    return `
      <div id="movie-search-container">
        <input id="query" type="text">
        <div class="movie-result-container">
          <ul class="movies">
          </ul>
        </div>
      </div>
    `
  }

  getFavoriteMovieTemplate () {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Movie</h2>
        <div id="movies" class="movies"></div>
      </div>
    `
  }

  showFavoriteMovies (movies) {
    document.getElementById('movies').innerHTML = '<div class="movie-item__not__found"></div>'

    document.getElementById('movies')
      .dispatchEvent(new Event('movies:updated'))
  }

  runWhenUserIsSearching (callback) {
    document.getElementById('query')
      .addEventListener('change', (event) => {
        callback(event.target.value)
      })
  }

  showMovies (movies) {
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
}

export default FavoriteMovieSearchView
