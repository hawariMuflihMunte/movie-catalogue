import TheMovieDbSource from '../../data/themoviedb-source'

const Upcoming = {
  async render () {
    return `
      <div class="content">
        <h2 class="content__heading">Upcoming in Cinema</h2>
        <div id="movies" class="movies"></div>
      </div>
    `
  },
  async afterRender () {
    const movies = await TheMovieDbSource.upcomingMovies()
  }
}

export default Upcoming
