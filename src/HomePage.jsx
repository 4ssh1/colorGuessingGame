import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
       <div className="container">
      <div className="card">
          <h2>Match the Colour Game</h2>
          <h4>Match the colour displayed by clicking the correct box </h4>
          <Link to="/game"><button className="start">Start Game !</button></Link>
      </div>
    </div>
    </>
  )
}

export default HomePage
