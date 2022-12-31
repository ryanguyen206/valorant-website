import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import { useContext } from 'react'
import { ValContext } from '../context/ValContextProvider'
import {GiHeavyBullets} from 'react-icons/gi'
const Arsenal = () => {

    const {weapons, weaponReducerState, weaponDispatch} = useContext(ValContext)
    const {sidearms,
        smgs,
        heavies,
        snipers,
        melee,
        rifles} = weaponReducerState
    
    const onlyWeapons = weapons.weapons
    
    function handleReducer (e) {
        weaponDispatch({type:e.target.value})
     
    }

  

    function transformWeapons() {
        let filteredWeapons = onlyWeapons;

        if (sidearms) {
            filteredWeapons = filteredWeapons.filter(gun => gun.weapon_category_machine_name === 'sidearms')
        }
        if (heavies) {
            filteredWeapons = filteredWeapons.filter(gun => gun.weapon_category_machine_name === 'heavies')
        }
        if (smgs) {
            filteredWeapons = filteredWeapons.filter(gun => gun.weapon_category_machine_name === 'smgs')
        }
        if (snipers) {
            filteredWeapons = filteredWeapons.filter(gun => gun.weapon_category_machine_name ==='snipers')
        }
        if (melee) {
            filteredWeapons = filteredWeapons.filter(gun => gun.weapon_category_machine_name ==='melee')
        }
        if (rifles) {
            filteredWeapons = filteredWeapons.filter(gun => gun.weapon_category_machine_name ==='rifles')
        }
    
        return filteredWeapons;
    }


   // console.log(transformWeapons())

    return (

    <>   
        <div className='filterWrapper'>
            <h3 className="filter-aresenal">Filter Products</h3>
            <Form.Select className='filter-select' size="lg" onChange={(e) =>{handleReducer(e)}} aria-label="Default select example">
            <option value="sidearms">Sidearms</option>
            <option value="smgs">Smgs</option>
            <option value="rifles">Rifles</option>
            <option value="snipers">Snipers</option>
            <option value="heavies">Heavies</option>
            <option value="melee">Melee</option>
            </Form.Select>
        </div>
    
        {onlyWeapons.length > 0 ? 
        (
        <div className='weaponContainer'>
            {transformWeapons().map(weapon => (
                <div key={weapon.weapon_name} className='weaponCard'>
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
    </>
 
  )
}

export default Arsenal