import React, {useEffect, useState, useContext} from 'react'

import Navbar from './Navbar'
import {Link} from 'react-router-dom'
// import {picsData} from '../utils/exportPics'
import { ValContext } from '../context/ValContextProvider'


const Agents = () => {

const {allPics, allAgents} = useContext(ValContext)

  console.log(allAgents)
  return (
   
    <div className="agentsContainer">
        {allAgents.map((agent, index) => (
        
          <div key={index} className='agentCardWrapper'>
            <Link to={`/agents/${allPics[index].name}`}>
              <img alt='agent-picture' className='agent-image' src={allPics[index].url}/>
              <div className='layer'>
                  <h3>{agent.title}</h3>
                  <h4>{agent.role}</h4>
              </div>
            </Link>
          </div>
        
        ))}
  
    </div>
  
  )
  
}

export default Agents