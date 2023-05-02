/* eslint-disable no-undef */
// likeMovieSpec.js

import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator'

describe('Liking A Movie', () => {
  it('Should show the like button when the movie has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="like this movie"]'))
      .toBeTruthy()
  })
})
