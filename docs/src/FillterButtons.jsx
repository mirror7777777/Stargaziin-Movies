import React from 'react'
import './css/Button.css'

function Buttons(prop) {
  return (
    <div>
      <div className="displaybutton">
         <div className="pass">
        <button onClick={prop.pass}>Top Rated</button>
      </div>
      <div className="fail">
        <button onClick={prop.fail}>Low Rated</button>
      </div>
      </div>
     
      
    </div>
  )
}
export default Buttons
