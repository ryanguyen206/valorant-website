import React from 'react'
import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const NormalNavigtation = () => {
    return (
        <div className='navbar-container same'>
          <div className='navbar-left'>
            <h1><Link to='/'>Valorantpedia</Link></h1>
          </div>

         <div className='navbar-right'>
              <ul className='navbar-ul'>
                <Link to='/'><li>Agents</li></Link>
                <Link to='/arsenal'><li>Arsenal</li></Link>
                <Link to='/maps'><li>Maps</li></Link>
              </ul>
          </div>
         
        </div>
      )
}

export default NormalNavigtation