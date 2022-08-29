import React, {useState, useEffect} from 'react'
import { useContext } from 'react'
import { ValContext } from '../context/ValContextProvider'
import {GiHeavyBullets} from 'react-icons/gi'
const Arsenal = () => {

    const {weapons} = useContext(ValContext)
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
                    <div className='layer layerhelp'>
                        <h3 className='guntype'>Type: {weapon.weapon_category_machine_name}</h3>
                        <p><span className='layer-bullet'><GiHeavyBullets/></span>{weapon.weapon_tagline}</p>
                    </div>
                </div>
            ))}
        </div>
        ) : ''}
    </div>
 
  )
}

export default Arsenal