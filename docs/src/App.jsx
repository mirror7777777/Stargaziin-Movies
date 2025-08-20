import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './movieList'
import MovieInput from './movieInput'
import MovieItem from './movieItems'
import Number from './number'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Number />
    <MovieInput/>
    <MovieItem/>
    </>
  )
}

export default App
