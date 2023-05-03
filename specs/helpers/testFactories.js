import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter'

const createLikeButtonPresenterWithMovie = async (movie) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    movie
  })
}

export {
  createLikeButtonPresenterWithMovie
}
