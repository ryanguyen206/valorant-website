import React, {useEffect, useState, useContext} from 'react'
import { options, fetchData } from '../utils/fetchData'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
// import {picsData} from '../utils/exportPics'
import { ValContext } from '../context/ValContextProvider'


const Agents = () => {

const [allAgents, setAllAgents] = useState([])

const {allPics} = useContext(ValContext)





  useEffect(() => {
    const fetchMapsData = async () => {
        const agentsData = await fetchData("https://valorant-agents-maps-arsenal.p.rapidapi.com/agents/en-us", options)
        setAllAgents(agentsData.agents)
      }

    fetchMapsData();
  
    

  }, [])
  
    
  return (
    <Link to='/agents/'>
    <div className="agentsContainer">
        {allAgents.map((agent, index) => (
          <div key={index} className='agentCardWrapper'>
            <img className='agent-image' src={allPics.picsData[index].url}/>
            <div className='layer'>
            <h3>{agent.title}</h3>
            <h4>{agent.role}</h4>
            </div>
          </div>
        ))}
  
    </div>
    </Link>
  )
  
}

export default Agents