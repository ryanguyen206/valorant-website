import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { ValContext } from '../context/ValContextProvider';
import {options, fetchData} from '../utils/fetchData'




const AgentDetails = () => {

  const {allPics, allAgents } = useContext(ValContext)
  const [agent, setAgent] = useState([])
  
  const {name} = useParams()

  useEffect(() => {
    const fetchSpecificAgent = async () => {
     const specifcAgentData = await fetchData(`https://valorant-agents-maps-arsenal.p.rapidapi.com/agents/en-us?name=${name}`, options)
     setAgent(specifcAgentData.agents)
    }
   
    fetchSpecificAgent();
    
  }, [name])
  
  const singlePic = allPics.filter(img => img.name === name)
  console.log(agent)
  

  return (
    <div className='agentDetailsContainer'>
      {agent.length >0 && ( 
        <div className='agentDetailsWrapper'>
            <div className='agentDetailsWrapper-left'>
            <img className='agentDetails-img' alt='agent-picture' src={singlePic[0].url}/>
            </div>
            <div className='agentDetailsWrapper-right'>
                <h1 className='h1-upper'>{agent[0].title} <span className='role-span'>- {agent[0].role}</span></h1>
                <p style= {{marginTop:'25px'}}className='dark_text'>{agent[0].description}</p> 
              {agent[0].abilities.map(ability => (
                <div className='agentDetails-ability'>
                    <h3 className='dark_text h3'>{ability.ability_name}</h3>
                    <p style= {{marginTop:'25px'}}  className='dark_text'>{ability.ability_description}</p>
                </div>
              ))}

            </div>
        </div>
      )}
    </div>
   
   

    
  )
}

export default AgentDetails