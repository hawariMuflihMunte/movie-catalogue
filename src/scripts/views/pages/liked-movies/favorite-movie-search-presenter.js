class FavoriteMovieSearchPresenter {
  constructor () {
    this._queryElement = document.getElementById('query')

    this._queryElement.addEventListener('change', (event) => {
      console.log(event)
      this._userQuery = event.target.value
    })
  }

  get userQuery () {
    return this._userQuery
  }
}

export default FavoriteMovieSearchPresenter
