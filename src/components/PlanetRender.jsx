import React, {Suspense, useRef} from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import aoMap from '../texture/Bark_005_ambientOcclusion.jpg'
import bMap from '../texture/Bark_005_baseColor.jpg'
import hMap from '../texture/Bark_005_height.png'
import rMap from '../texture/Bark_005_roughness.jpg'
import nMap from '../texture/Bark_005_roughness.jpg'

import {TextureLoader} from 'three'



const MyObject = () => {
  const mesh = useRef()
  const abOcc = useLoader(TextureLoader, aoMap)
  const baseColor = useLoader(TextureLoader, bMap)
  const height = useLoader(TextureLoader, hMap)
  const roughness = useLoader(TextureLoader, rMap)
  const normal = useLoader(TextureLoader, nMap)
  console.log(abOcc)

  useFrame(() => {
    mesh.current.rotation.y += 0.0075
    mesh.current.rotation.z += 0.0015
  })

  return (
    <mesh ref={mesh} scale={[1, 1, 1]} position={[0, 0, 0]}>
      <sphereBufferGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        aoMap={abOcc}
        map={baseColor}
        displacementMap={height}
        displacementScale={.2}
        roughnessMap={roughness}
        normalMap={normal}
      />
    </mesh>
  )
}

export default function PlanetRender() {
  return (
    <div id="planetRender">
    <Canvas >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Suspense fallback={null}>
        <MyObject />
      </Suspense>
      </Canvas>
    </div>
  ) 
}

