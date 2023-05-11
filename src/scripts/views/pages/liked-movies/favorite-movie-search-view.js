import { createMovieItemTemplate } from '../../templates/template-creator'

class FavoriteMovieSearchView {
  getTemplate () {
    return `
    <div class="content">
      <input id="query" type="text">
      <h2 class="content__heading">Your Liked Movie</h2>
      <div id="movies" class="movies"></div>
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

  runWhenUserIsSearching (callback) {
    document.getElementById('query')
      .addEventListener('change', (event) => {
        callback(event.target.value)
      })
  }

  showFavoriteMovies (movies = []) {
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
        (carry, movie) => carry.concat(createMovieItemTemplate(movie)),
        ''
      )
    } else {
      html = this._getEmptyMovieTemplate()
    }

    document.querySelector('.movies').innerHTML = html

    document.getElementById('movies')
      .dispatchEvent(new Event('movies:updated'))
  }

  _getEmptyMovieTemplate () {
    return '<div class="movie-item__not__found">Tidak ada film untuk ditampilkan</div>'
  }
}

export default FavoriteMovieSearchView
