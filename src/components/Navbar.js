import React, {useState} from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import MobileNavigation from './MobileNavigation'
import NormalNavigtation from './NormalNavigtation'

const Navbar = () => {


  
  return (
    <div>
      <MobileNavigation/>
      <NormalNavigtation/>
    </div>
  )
}

export default Navbar