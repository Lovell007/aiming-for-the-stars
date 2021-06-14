
import React, { useEffect, useState } from 'react'
import { getPlanetList } from '../services/api'

export default function SolarSystem() {
  const titanAU = []
  const asgard = []
  const cr21 = []
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    const fetchPlanets = async () => {
      const res = await getPlanetList();
      setPlanets(res)
  };
    fetchPlanets();
  }, [])

  return (
    

    <div>
      {planets?.map((planet) => {
        if (planet.fields.solarSystem === 'Titan AU') {
          titanAU.push(planet)
        } else if(planet.fields.solarSystem === 'Asgard') {
          asgard.push(planet)
        } else if(planet.fields.solarSystem === 'CR 21') {
          cr21.push(planet)
        } else
        return(<div>null</div>)
      })}
      
        <h1 id="titanau" className="solarSystem">Titan AU</h1>
      {titanAU.map((ss) => {
        return (
          <div id="ssPlanets">{ss.fields.planetName}</div>
        )})}
        
      <h1 id="asgard" className="solarSystem">Asgard</h1>
      {asgard.map((ss) => {
        return (
          <div id="ssPlanets">{ss.fields.planetName}</div>
        )})}
        
      <h1 id="cr21" className="solarSystem">CR 21</h1>
      {cr21.map((ss) => {
        return (
          <div id="ssPlanets" className="bottomPlanet">{ss.fields.planetName}</div>
        )})}
      </div>
  )
}
