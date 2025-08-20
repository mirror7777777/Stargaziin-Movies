import React from 'react'
import Movies from './assets/moviedata'
import { useState } from 'react';
import './css/Button.css'
import Buttons from './FillterButtons';

export default function MovieItem() {
    const[onClick , setOnclick] = useState('')

    const  passedButton = () => {
        const passed = Movies.filter((rate)=> rate.ratings >=5);
        return passed.map((item)=>{
            return<ul key={item.name}> 
                    <li className='list'>{item.name} - genre : {item.genre}  - ratings : {item.ratings} - Status : {item.status}</li>
                </ul>

        })
       
       
    }
      const  failedButton = () => {
          const failed = Movies.filter((rate)=> rate.ratings <=4);
        return failed.map((item)=>{
            return<ul key={item.name}> 
                    <li className='list'>{item.name} - genre : {item.genre}  - ratings : {item.ratings} - Status : {item.status}</li>
                </ul>

        })
       
    }

  return (
    <div>
     <Buttons pass ={()=>{setOnclick(passedButton())}} fail = {()=>{setOnclick(failedButton())}}/>
      {onClick}
      
    </div>
  )
}