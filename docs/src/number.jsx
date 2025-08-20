import React from 'react'
import { useState, useRef } from 'react'

export default function Number() {
    const [number , setNumber] = useState()
    const [numbertype , setNumbertype] = useState()
    const ref = useRef()


    function OddNumber(e) {
        setNumber(e.target.value)
      


        
    }
    function numcheck(params) {
          setNumbertype( prev => {
            if (number%2 === 0) {
                return(
                    <div>
                        <p>number is even</p>
                    </div>
                )
                
                
                
        }else
         return(
                    <div>
                        <p>number is odd</p>
                    </div>
                )
        }
        )
        
    }
   
  return (
    <div>
        <div className="input">
            <form action="">
               <h3>Enter Number : <input type="number"  onChange={OddNumber}/></h3> 
            </form>
            <button onClick={numcheck} >Click</button>
        </div>
        {numbertype}

      
    </div>

  )
}
