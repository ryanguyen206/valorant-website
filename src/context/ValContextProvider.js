
import React, {createContext, useState, useEffect} from 'react'
import {picsData} from '../utils/exportPics'
import { options, fetchData } from '../utils/fetchData'

export const ValContext = createContext()

const ValContextProvider = ({children}) => {

  const [allPics, setAllPics] = useState(picsData)
  const [allAgents, setAllAgents] = useState([])
  console.log(allPics)
  
  useEffect(() => {
    const fetchAgentsData = async () => {
        const agentsData = await fetchData("https://valorant-agents-maps-arsenal.p.rapidapi.com/agents/en-us", options)
        setAllAgents(agentsData.agents)
      }

    fetchAgentsData();
  
  }, [])
   
  return (
    <ValContext.Provider value={{allPics, allAgents}}>
      {children}
    </ValContext.Provider>
  )
}

export default ValContextProvider