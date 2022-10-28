import React, {useEffect, useState, useContext} from 'react'

import Navbar from './Navbar'
import {Link} from 'react-router-dom'

import { ValContext } from '../context/ValContextProvider'
import Loader from './Loader';

const Agents = () => {

const {allPics, allAgents} = useContext(ValContext)





return (
    <div>
       {(allAgents.length > 0) ? (<div className="agentsContainer">

        {allAgents.map((agent, index) => (
      
          <div key={index} className='agentCardWrapper'>
            <Link to={`/agents/${agent.agent_image.url}`}>
              <img alt='agent-picture' className='agent-image' src={allPics[index].url}/>
  
              <div className='layer'>
                  <h3>{agent.title}</h3>
                  <h4>{agent.role}</h4>

              </div>
            </Link>
          </div>
        
        ))}
    </div>) : <Loader/>}
    </div>
   
  
  )
  
}

export default Agents