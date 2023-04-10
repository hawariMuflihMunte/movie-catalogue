import TheMovieDbSource from '../../data/themoviedb-source'
import UrlParser from '../../routes/url-parser'

const Detail = {
  async render () {
    return `
      <h2>Detail Page</h2>
    `
  },
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const movie = await TheMovieDbSource.detailMovie(url.id)
    console.log(movie)

    // TODO: tampilkan movies di dalam DOM
  }
}

export default Detail
