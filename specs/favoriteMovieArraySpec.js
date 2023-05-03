/* eslint-disable no-undef */
import { itActsAsFavoriteMovieModel } from './contract/favoriteMovieContract'

let favoriteMovies = []

const FavoriteMovieArray = {
  getMovie (id) {
    if (!id) {
      return false
    }

    return favoriteMovies.find((movie) => movie.id === id)
  },

  getAllMovies () {
    return favoriteMovies
  },

  putMovie (movie) {
    // eslint-disable-next-line no-prototype-builtins
    if (!movie.hasOwnProperty('id')) {
      return false
    }

    // Pastikan id ini belum ada daftar favoriteMovies
    if (this.getMovie(movie.id)) {
      return false
    }

    favoriteMovies.push(movie)
  },

  deleteMovie (id) {
    // Cara boros menghapus film dengan meng-copy film yang ada
    // Kecuali film dengan id === id
    favoriteMovies = favoriteMovies.filter((movie) => movie.id !== id)
  }
}

describe('Favorite Movie Array Contract Test Implementation', () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => favoriteMovies = [])

  itActsAsFavoriteMovieModel(FavoriteMovieArray)
})
