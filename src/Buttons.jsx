import React, { useEffect } from 'react'
import "./Buttons.css"

const Buttons = () => {
  useEffect(()=>{
    const btn=document.querySelector('#btn1');
    btn.addEventListener('click',()=>{
      btn.style.animation="ani 1s 1"
    })
  })
  return (
    <div>
     <button id="btn1" type="button" >click me</button>
    </div>
  )
}

export default Buttons
