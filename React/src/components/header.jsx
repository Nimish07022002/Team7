import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <h1 style={{textAlign:'center'}}>Airport Flight Control Simulator</h1>
      <nav>
        <Link to="/" id="btnhome">Home</Link>
        <Link to="/manual" id="btnmanual">Manual Simulator</Link>
        <Link to="/automatic" id="btnautomatic">Automatic Simulator</Link>
      </nav>
    </>
  )
}
