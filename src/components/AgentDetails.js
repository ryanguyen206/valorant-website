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
  
  


  

  return (
    <div className='agentDetailsContainer'>
      {agent.length >0 && ( 
     
        <div className='agentDetailsWrapper'>
          
            <div className='agentDetailsWrapper-left'>
            <img className='agentDetails-img' alt='agent-picture' src={agent[0].agent_image.url}/>
            </div>
            <div className='agentDetailsWrapper-right'>
                <h1 className='h1-upper'>{agent[0].title} <span className='role-span'>- {agent[0].role}</span></h1>
                <p style= {{marginTop:'25px'}}className='dark_text'>{agent[0].description}</p> 
              {agent[0].abilities.map((ability, index) => (
                <div className='agentDetails-ability'>
                    <h3 className='dark_text h3'>{ability.ability_name}</h3>                   
                    <p style= {{marginTop:'25px'}}  className='dark_text'>{ability.ability_description}</p>
                    <div className="agentDetails-video">
                      <video controls width="100%">
                      <source src={ability.ability_video[0].video.file.url} type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                      </video>
                    </div>
                </div>
              ))}

            </div>
        </div>
      )}
    </div>
   
   

    
  )
}

export default AgentDetails