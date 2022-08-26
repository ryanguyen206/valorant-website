
import React, {createContext, useState} from 'react'
import {picsData} from '../utils/exportPics'

export const ValContext = createContext()

const ValContextProvider = ({children}) => {

  const [allPics, setAllPics] = useState({picsData})
  

  return (
    <ValContext.Provider value={{allPics}}>
      {children}
    </ValContext.Provider>
  )
}

export default ValContextProvider