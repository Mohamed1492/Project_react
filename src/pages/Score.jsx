import React from 'react'
import { Link } from 'react-router-dom'

const Score = ({score, resetStates}) => {
  return (
    <div>
        <h1>Score :{score}</h1>
        <Link to="/">
        <button onClick={()=> resetStates()}> Home</button>
        </Link>
    </div>
  )
}

export default Score