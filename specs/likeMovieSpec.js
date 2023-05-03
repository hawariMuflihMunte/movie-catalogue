/* eslint-disable no-undef */
// likeMovieSpec.js

import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator'
import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb'

import * as TestFactories from './helpers/testFactories'

describe('Liking A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('Should show the like button when the movie has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="like this movie"]'))
      .toBeTruthy()
  })

  it('Should not show the unlike button when the movie has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="unlike this movie"]'))
      .toBeFalsy()
  })

  it('Should be able to like the movie', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1
      }
    })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const movie = await FavoriteMovieIdb.getMovie(1)

    expect(movie)
      .toEqual({ id: 1 })

    FavoriteMovieIdb.deleteMovie(1)
  })

  it('Should not add a movie again when its already liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1
      }
    })

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteMovieIdb.putMovie({ id: 1 })

    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    // Tidak ada film ganda
    expect(await FavoriteMovieIdb.getAllMovies())
      .toEqual([{ id: 1 }])

    FavoriteMovieIdb.deleteMovie(1)
  })

  // Menggunakan metode xit, bukan it
  it('Should not add a movie when it has no id', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {}
    })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    expect(await FavoriteMovieIdb.getAllMovies())
      .toEqual([])
  })
})
