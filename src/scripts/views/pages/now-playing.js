import TheMovieDbSource from '../../data/themoviedb-source'

const NowPlaying = {
  async render () {
    return `
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="movies"></div>
      </div>
    `
  },
  async afterRender () {
    const movies = await TheMovieDbSource.nowPlayingMovies()
    console.log(movies)

    // TODO: tampilkan movies di dalam DOM
  }
}

export default NowPlaying
