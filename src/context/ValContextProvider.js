
import React, {createContext, useState, useEffect} from 'react'
import {picsData} from '../utils/exportPics'
import { options, fetchData } from '../utils/fetchData'

export const ValContext = createContext()

const ValContextProvider = ({children}) => {

  const [allPics, setAllPics] = useState(picsData)
  const [weapons, setWeapons] = useState()
  const [allAgents, setAllAgents] = useState([])

  
  useEffect(() => {
    const fetchAgentsData = async () => {
        const agentsData = await fetchData("https://valorant-agents-maps-arsenal.p.rapidapi.com/agents/en-us", options)
        setAllAgents(agentsData.agents)
      }

      const getWeaponsData = async () => {
        const weaponsData = await fetchData('https://valorant-agents-maps-arsenal.p.rapidapi.com/arsenal/en-us', options)
        setWeapons(weaponsData)
       
    }
    getWeaponsData();

    fetchAgentsData();
  
  }, [])
   
  return (
    <ValContext.Provider value={{allPics, allAgents, weapons}}>
      {children}
    </ValContext.Provider>
  )
}

export default ValContextProvider