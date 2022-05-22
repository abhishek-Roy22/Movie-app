import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
// import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  // const [searchValue, setSearchValue] = useState(" ");

  const getMovieRequest = async () => {
    const url = ` http://www.omdbapi.com/?s=star wars&apikey=7f15a100`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container">
      <MovieListHeading heading="Movies" />
      {/* <SearchBox /> */}
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
