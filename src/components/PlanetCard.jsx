import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getPlanetCard } from "../services/api"
import textures from "../textures.json"
import PlanetRender from './PlanetRender'


export default function PlanetCard() {
  const [planet, setPlanet] = useState('')
  const { id } = useParams()
  
  
  useEffect(() => {
    const fetchPlanet = async () => {
      const res = await getPlanetCard(id)
      setPlanet(res)
    }
    fetchPlanet()
  }, [id])
  
  
  
  const massCalculator = `${planet.fields?.mass}` * 1423
  
  return (
    <div>
      <PlanetRender />
      <div id="planetCardInfo">
        <p id="pcn">{planet.fields?.planetName}</p>
        <p id="pcm">Diameter: {massCalculator} miles</p>
        <p id="pce">Composition: {planet.fields?.elementalComposition}</p>
        <p id="pcmd"></p>
        <p id="pcd">{planet.fields?.description}</p>
        <p id="editBtn">
          <Link to={`/planet/edit/${planet.id}`}>
            <button>Edit Planet</button>
          </Link>
        </p>
      </div>
    </div>
  )
}
