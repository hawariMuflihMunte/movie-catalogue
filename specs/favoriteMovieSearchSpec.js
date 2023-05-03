/* eslint-disable no-undef */

import FavoriteMovieSearchPresenter from '../src/scripts/views/pages/liked-movies/favorite-movie-search-presenter'
import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb'

describe('Searching movies', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="movie-search-container">
        <input id="query" type="text">
        <div class="movie-result-container">
          <ul class="movies">
          </ul>
        </div>
      </div>
    `
  })

  it('Should be able to capture the query typed by the user', () => {
    spyOn(FavoriteMovieIdb, 'searchMovies')
    // eslint-disable-next-line no-unused-vars
    const presenter = new FavoriteMovieSearchPresenter({ favoriteMovies: FavoriteMovieIdb })

    const queryElement = document.getElementById('query')
    queryElement.value = 'film a'
    queryElement.dispatchEvent(new Event('change'))

    expect(presenter.latestQuery)
      .toEqual('film a')
  })

  it('Should ask the model to search for liked movies', () => {
    spyOn(FavoriteMovieIdb, 'searchMovies')
    // eslint-disable-next-line no-unused-vars
    const presenter = new FavoriteMovieSearchPresenter({ favoriteMovies: FavoriteMovieIdb })

    const queryElement = document.getElementById('query')
    queryElement.value = 'film a'
    queryElement.dispatchEvent(new Event('change'))

    expect(FavoriteMovieIdb.searchMovies)
      .toHaveBeenCalledWith('film a')
  })
})
