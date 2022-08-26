import React, {useState, useEffect} from 'react'
import {options, fetchData} from '../utils/fetchData'

const Maps = () => {

    const [allMaps, setMaps]  = useState([])

    useEffect(() => {
      const fetchMaps = async () => {
        const mapsData = await fetchData('https://valorant-agents-maps-arsenal.p.rapidapi.com/maps/en-us', options)
        setMaps(mapsData.maps)
      }

      fetchMaps();
    
      
      
    }, [])
    console.log(allMaps)


  return (
    <div>

        {allMaps.map(mapo => (
            <div>
            <h2>{mapo.map_name}</h2>
            <p key={mapo.map_description}>{mapo.map_description}</p>
          
            </div>
        ))}
    </div>
   
  )
}

export default Maps