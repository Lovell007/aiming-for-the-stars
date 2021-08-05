import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export default function MyObject(props) {
  const { foundTexture } = props;
  const mesh = useRef();
  const abOcc = useLoader(TextureLoader, `${foundTexture.aoMap}`);
  const baseColor = useLoader(TextureLoader, `${foundTexture.map}`);
  const height = useLoader(TextureLoader, `${foundTexture.displacementMap}`);
  const roughness = useLoader(TextureLoader, `${foundTexture.roughnessMap}`);
  const normal = useLoader(TextureLoader, `${foundTexture.normalMap}`);
  // const metal = useLoader(TextureLoader, `${foundTexture.metalnessMap}`);

  useFrame(() => {
    mesh.current.rotation.y += 0.0075;
    mesh.current.rotation.z += 0.0015;
  });

  return (
    <mesh ref={mesh} scale={[1, 1, 1]} position={[0, 0, 0]}>
      <sphereBufferGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        aoMap={abOcc}
        map={baseColor}
        displacementMap={height}
        displacementScale={0.4}
        roughnessMap={roughness}
        normalMap={normal}
        // metalness={0.4}
        // metalnessMap={metal}
      />
    </mesh>
  );
}
