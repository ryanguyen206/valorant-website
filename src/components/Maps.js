import React, {useState, useEffect} from 'react'
import {options, fetchData} from '../utils/fetchData'
import {mapPics} from '../utils/exportPics'

const Maps = () => {

    const [allMaps, setMaps]  = useState(mapPics)



    useEffect(() => {
      const fetchMaps = async () => {
        const mapsData = await fetchData('https://valorant-agents-maps-arsenal.p.rapidapi.com/maps/en-us', options)
        setMaps(mapsData.maps)
      }


      fetchMaps();
    
      
      
    }, [])
    // console.log (allMaps, 'swag')
    // console.log(mapPics[0].url, 'hello')


  return (
    <div className='mapContainer white'>
        {allMaps.slice(1,8).map((mapo, index) => (
            <div className='mapContainerCard white'>
                  <img alt='specific maps from game' className='map-img white' src= {mapPics[index +1 ].url} />
                  <h2 className='bf white'>{mapo.map_name}</h2>
                  <p className='sf font white' key={mapo.map_description}>{mapo.map_description}</p>
            </div>
        ))}
    </div>
   
  )
}

export default Maps