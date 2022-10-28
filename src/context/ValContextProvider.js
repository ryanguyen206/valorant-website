import React, {createContext, useState, useEffect, useReducer} from 'react'
import {picsData} from '../utils/exportPics'
import { options, fetchData } from '../utils/fetchData'
import { WeaponReducer } from '../utils/WeaponReducer'

export const ValContext = createContext()

const ValContextProvider = ({children}) => {

  const [allPics, setAllPics] = useState(picsData)
  const [weapons, setWeapons] = useState()
  const [allAgents, setAllAgents] = useState([])

  ///fetch ALL agents and weapons data 
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

  console.log(allAgents);
  //reducer to filter weapons
  const [weaponReducerState, weaponDispatch] = useReducer(WeaponReducer, {
    sidearms:false,
    smgs:false,
    heavies:false,
    snipers:false,
    melee:false,
    rifles:false,
  })
   console.log(weaponReducerState)
  return (
    <ValContext.Provider value={{allPics, allAgents, weapons, weaponReducerState, weaponDispatch}}>
      {children}
    </ValContext.Provider>
  )
}

export default ValContextProvider