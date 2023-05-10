/* eslint-disable no-undef */

import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb'
import FavoriteMovieSearchView from '../src/scripts/views/pages/liked-movies/favorite-movie-search-view'
import FavoriteMovieShowPresenter from '../src/scripts/views/pages/liked-movies/favorite-movie-show-presenter'

describe('Showing all favorite movies', () => {
  let view

  const renderTemplate = () => {
    view = new FavoriteMovieSearchView()
    document.body.innerHTML = view.getFavoriteMovieTemplate()
  }

  beforeEach(() => {
    renderTemplate()
  })

  describe('When no movies have been liked', () => {
    it('Should render the information that no movies have been liked', () => {
      const favoriteMovies = spyOnAllFunctions(FavoriteMovieIdb)
      const presenter = new FavoriteMovieShowPresenter({
        view,
        favoriteMovies
      })

      const movies = []
      presenter._displayMovies(movies)

      expect(document.querySelectorAll('.movie-item__not__found').length)
        .toEqual(1)
    })

    it('Should ask for the favorite movies', () => {
      const favoriteMovies = spyOnAllFunctions(FavoriteMovieIdb)

      // eslint-disable-next-line no-new
      new FavoriteMovieShowPresenter({
        view,
        favoriteMovies
      })

      expect(favoriteMovies.getAllMovies)
        .toHaveBeenCalledTimes(1)
    })

    it('Should show the information that no movies have been liked', (done) => {
      document.getElementById('movies')
        .addEventListener('movies:updated', () => {
          expect(document.querySelectorAll('.movie-item__not__found').length)
            .toEqual(1)

          done()
        })

      const favoriteMovies = spyOnAllFunctions(FavoriteMovieIdb)
      favoriteMovies.getAllMovies
        .and
        .returnValues([])

      // eslint-disable-next-line no-new
      new FavoriteMovieShowPresenter({
        view,
        favoriteMovies
      })
    })
  })
})
