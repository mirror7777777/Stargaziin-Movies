import React from 'react'
import logo from "../assets/images/main logo.png"

export default function Header() {
  return (
    <div>
        <div className="header">
            <img src={logo} alt="Logo" />

            <div className="list">
                <ul>
                    <li><a href="">MovieInput</a></li>
                    <li><a href="">MovieItem</a></li>
                    <li><a href="">MovieList</a></li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}
 