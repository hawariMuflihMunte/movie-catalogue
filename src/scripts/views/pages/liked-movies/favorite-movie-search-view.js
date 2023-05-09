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
