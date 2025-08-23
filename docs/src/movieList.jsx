import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'  
import  Movies from './assets/moviedata.jsx'

export default function MovieList() {
  return (
    <div>
        <h1>Movie List</h1>
        <div className="movielist">
            {Movies.map((movie, index) => (
                <div key={index} className="movie">
                    <h2>{movie.name}</h2>
                    <p>Genre :  {movie.genre}</p>
                    <p>Ratings :  {movie.ratings}</p>
                    <p>Movie Status :  {movie.status}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
