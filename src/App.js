import React from "react";
import axios from 'axios'
import MovieCard from "./MoviesCard";
import "./App.css"
class App extends React.Component {
  state = {
    movies: [],
    query: ""
  }
  componentDidMount() {
    this.featchMovies();
  }

  featchMovies = (query = "") => {
    let apiUrl;
    if (query) {
      apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=cfe422613b250f702980a3bbf9e90716&query=${query}`;
    } else {
      apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`;
    }

    axios.get(apiUrl)
      .then((response) => {
        this.setState({ movies: response.data.results, query });
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }

  changeMovieName = (e) => {
    const query = e.target.value
    this.featchMovies(query);
  }

  render() {
    return (
      <>
        <div id="search-wrapper">
          <form className="search">
            <input type="search" placeholder="Search for Movie Title..."
              onChange={(e) => { this.changeMovieName(e) }}
              value={this.state.query}
            ></input>
          </form>
        </div>
        <div className="movies">
          {this.state.movies.map((movie, i) => {
            return <MovieCard
              key={i}
              id={movie.id}
              thumbnail={movie.poster_path}
              title={movie.title}
            />
          })}
        </div>
        <footer class="footer">
          <p>&copy 2017 Mustafa Ispahani</p>
        </footer>


      </>
    )
  }
}
export default App;