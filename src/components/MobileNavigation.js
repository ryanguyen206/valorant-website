import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const MobileNavigation = () => {
    const [showMenu, setShowMenu] = useState(false)
    
    return (
        <div className='mobile-navbar-container same'>
          <div className='navbar-left'>
            <h1><Link to='/'>Valorantpedia</Link></h1>
          </div>
         <GiHamburgerMenu
            className='mobile-hamburger'
            onClick = {() => setShowMenu(!showMenu)}
         />
        {showMenu && <div className='mobile-navbar-right'>
              <ul className='navbar-ul'>
                <Link to='/'><li onClick={() => setShowMenu(!showMenu)}>Agents</li></Link>
                <Link to='/arsenal'><li onClick={() => setShowMenu(!showMenu)}>Arsenal</li></Link>
                <Link to='/maps'><li onClick={() => setShowMenu(!showMenu)}>Maps</li></Link>
              </ul>
          </div>} 
         
        </div>
      )
}

export default MobileNavigation