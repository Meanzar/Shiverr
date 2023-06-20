import {Link} from 'react-router-dom'
import React from 'react'
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    <header>
      <div className='container'>
        <Link to='/'>
          <img src={logo} alt='logo shiver' style={{width:'230px'}}/>
        </Link>
        <Link to='/'>
          <h1>Films</h1>
        </Link>
        <Link to='/create'>
          <h1>Add</h1>
        </Link>
      </div>
    </header>
  )
}
