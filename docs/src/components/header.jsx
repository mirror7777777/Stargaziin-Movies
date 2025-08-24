import React from 'react'
import logo from "../assets/images/main logo.png"
import { NavLink , Link,Links} from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <div className="header">
            <img src={logo} alt="Logo" /><h1>Movies</h1>

            <div className="list">
                <ul>
                  <NavLink to='/list'><li>List of available movies</li></NavLink>
                  <NavLink to='/'><li>MovieInput</li></NavLink>
                  <NavLink to = '/item'><li>MovieItem</li></NavLink>
                   
                </ul>
            </div>
        </div>
      
    </div>
  )
}
 