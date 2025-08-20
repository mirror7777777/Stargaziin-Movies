import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import Movies from './assets/moviedata.jsx'


export default function MovieInput() {
  const [movie, setMovie] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [status, setStatus] = useState('');
  const [adding, setAdding] = useState('');
  const [movieList, setMovieList] = useState([]);

  function addMovie(e) {
    e.preventDefault();
    const Moviedata = {
      name: movie,
      genre: genre,
      ratings: rating,
      status: status
    };
    console.log(Moviedata)
    if (!Moviedata) {
      setAdding('Please fill in all fields');
      return;
    } else {
      setMovieList(prevList => [...prevList, Moviedata]);
      console.log(movieList)
    }
    setAdding(`Movie Added: ${movie}`);
  
    setMovie('');
    setGenre('');
    setRating('');
    setStatus('');
  }

  return (
    <div>
      <h1>Add Movies</h1>
      <div className="movie-inputs">
        <form onSubmit={addMovie}>
          <input type="text" placeholder="Movie Name" value={movie} onChange={e => setMovie(e.target.value)} />
          <input type="text" placeholder="Genre" value={genre} onChange={e => setGenre(e.target.value)} />
          <input type="number" placeholder="Rating" value={rating} onChange={e => setRating(e.target.value)} />
          <input type="text" placeholder="Status" value={status} onChange={e => setStatus(e.target.value)} />
          <button type="submit">Add Movie</button>
        </form>
        <div>
          {movieList? (
            movieList.map((movie, index) => (
              <div key={index}>
                <h1>{movie.name}</h1>
                <h1>{movie.genre}</h1>
                <h1>{movie.ratings}</h1>
                <h1>{movie.status}</h1>
              </div>
            ))
          ) : (
            <h1>no movie input</h1>
          )}
        </div>
      </div>
    </div>
  );
}
