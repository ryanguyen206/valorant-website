import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='navbar-container'>
        <h1><Link to='/'>Valorantpedia</Link></h1>
          <ul className='navbar-ul'>
            <Link to='/agents'><li>Agents</li></Link>
            <Link to='/arsenal'><li>Arsenal</li></Link>
            <Link to='/maps'><li>Maps</li></Link>
          </ul>
    </div>
  )
}

export default Navbar