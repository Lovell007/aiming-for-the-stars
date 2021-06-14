import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div id="navBar">
      <Link className='navLinks' to="/solarSystem">solar system</Link>
      <Link className='navLinks' to="/">planet creator</Link>
      <Link className='navLinks' to="/planetaryList">planetary list</Link>
    </div>
  )
}
