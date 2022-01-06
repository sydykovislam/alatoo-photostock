import React from 'react';
import logo from '../assets/logo.png'

const Title = () => {
  return (
    <div className="title">
      <div id="logo">
        <img src = {logo}/>
        <h1>Alat-Too PhotoStock</h1>
      </div>
      
      <h2>Your Pictures</h2>
      <p>Share your university life!</p>
    </div>
  )
}

export default Title;