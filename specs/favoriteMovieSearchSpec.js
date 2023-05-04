/* eslint-disable no-undef */

import FavoriteMovieSearchPresenter from '../src/scripts/views/pages/liked-movies/favorite-movie-search-presenter'
import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb'

describe('Searching movies', () => {
  let presenter

  const searchMovies = (query) => {
    const queryElement = document.getElementById('query')
    queryElement.value = query
    queryElement.dispatchEvent(new Event('change'))
  }

  const setMovieSearchContainer = () => {
    document.body.innerHTML = `
      <div id="movie-search-container">
        <input id="query" type="text">
        <div class="movie-result-container">
          <ul class="movies">
            <li class="movie">
              <span class="movie__title">Film Satu</span>
            </li>
          </ul>
        </div>
      </div>
    `
  }

  const constructPresenter = () => {
    spyOn(FavoriteMovieIdb, 'searchMovies')
    presenter = new FavoriteMovieSearchPresenter({
      favoriteMovies: FavoriteMovieIdb
    })
  }

  beforeEach(() => {
    setMovieSearchContainer()
    constructPresenter()
  })

  it('Should be able to capture the query typed by the user', () => {
    searchMovies('film a')

    expect(presenter.latestQuery)
      .toEqual('film a')
  })

  it('Should ask the model to search for liked movies', () => {
    searchMovies('film a')

    const queryElement = document.getElementById('query')
    queryElement.value = 'film a'
    queryElement.dispatchEvent(new Event('change'))

    expect(FavoriteMovieIdb.searchMovies)
      .toHaveBeenCalledWith('film a')
  })

  it('Should show the found movies', () => {
    presenter._showFoundMovies([{ id: 1, title: 'Film Satu' }])
    expect(document.querySelectorAll('.movie').length).toEqual(1)

    presenter._showFoundMovies([
      {
        id: 1,
        title: 'Satu'
      },
      {
        id: 2,
        title: 'Dua'
      }
    ])
    expect(document.querySelectorAll('.movie').length).toEqual(2)
  })

  it('Should show the title of the found movies', () => {
    presenter._showFoundMovies([
      {
        id: 1,
        title: 'Satu'
      }
    ])
    expect(document.querySelectorAll('.movie__title').item(0).textContent)
      .toEqual('Satu')

    presenter._showFoundMovies([
      {
        id: 1,
        title: 'Satu'
      },
      {
        id: 2,
        title: 'Dua'
      }
    ])

    const movieTitles = document.querySelectorAll('.movie__title')
    expect(movieTitles.item(0).textContent)
      .toEqual('Satu')
    expect(movieTitles.item(1).textContent)
      .toEqual('Dua')
  })
})
