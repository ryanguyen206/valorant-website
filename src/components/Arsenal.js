import React, {useState, useEffect} from 'react'
import { useContext } from 'react'
import { ValContext } from '../context/ValContextProvider'
import {GiHeavyBullets} from 'react-icons/gi'
const Arsenal = () => {

    const {weapons} = useContext(ValContext)
    // const [weapons, setWeapons] = useState()
   
    useEffect(() => {
        // const getWeaponsData = async () => {
        //     const weaponsData = await fetchData('https://valorant-agents-maps-arsenal.p.rapidapi.com/arsenal/en-us', options)
        //     setWeapons(weaponsData)
           
        // }
        // getWeaponsData();
  
        console.log(onlyWeapons, 'hello')
    }, [])
    const onlyWeapons = weapons.weapons
   

   
  return (
    <div>   
        {onlyWeapons.length > 0 ? 
        (
        <div className='weaponContainer'>
            {onlyWeapons.map(weapon => (
                <div className='weaponCard'>
                    <GiHeavyBullets/>
                     <h2 className='weapon-h2'>{weapon.weapon_name}</h2>
                    <img alt='weapon-img' className='weaponImg' src = {weapon.weapon_asset.url}/>
                    <div className='layer'>
                        <h3 className='weapon-h3'>Type: {weapon.weapon_category_machine_name}</h3>
                        <p><span className='layer-bullet'><GiHeavyBullets/></span>{weapon.weapon_tagline}</p>
                    </div>
                </div>
            ))}
        </div>
        ) : <p>no good </p>}
    </div>
 
  
//     <div className='asernalContainer'>
//         <h1>Weapon Armory</h1>
//         {onlyWeapons.length > 0  && (
//             <>
//                 {weapons.map(weapon => (
//                     <p>{weapon.weapon_name}</p>
//                 ))}
//             </>
//         ) }

//     </div>
  )
}

export default Arsenal