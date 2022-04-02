import {useState, useEffect} from 'react';
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

export default function App() {
  const apiKey = '798d3f79'
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try{
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );

      const data = await response.json();
      setMovie(data);
      } catch(error) {
        console.error(error)
      }
        
  }

  return (
    <div className='App'>
      <MovieDisplay movie={movie}/>
      <Form getMovie={getMovie} movie={movie}/>
    </div>
  );
}
