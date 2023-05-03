/* eslint-disable no-undef */
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
    const queryElement = document.getElementById('query')
    queryElement.value = 'film a'
    queryElement.dispatchEvent(new Event('change'))

    expect((new FavoriteMovieSearchPresenter()).userQuery)
      .toEqual('film a')
  })
})
