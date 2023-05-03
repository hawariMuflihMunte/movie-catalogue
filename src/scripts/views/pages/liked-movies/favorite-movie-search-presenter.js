class FavoriteMovieSearchPresenter {
  constructor () {
    this._queryElement = document.getElementById('query')

    this._queryElement.addEventListener('change', (event) => {
      console.log(event)
      this._latestQuery = event.target.value
    })
  }

  get latestQuery () {
    return this._latestQuery
  }
}

export default FavoriteMovieSearchPresenter
