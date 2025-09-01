import React from 'react'
import MovieList from './movieList'
import MovieInput from './movieInput'
import MovieItem from './movieItems'
import Number from './number'
import{Route, BrowserRouter, Routes} from 'react-router-dom'
import Hometemplate from './templates/hometemplate'






function App() {

  return (
    <>
    <BrowserRouter basename='/Stargaziin-Movies/'>
    <Routes>
      <Route path='/' element={<Hometemplate/>}>
      <Route index element={<MovieInput/>}/>
      <Route path = '/list' element = {<MovieList/>}/>
      <Route path='/item' element ={<MovieItem/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
