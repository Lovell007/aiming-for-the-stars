import React, { Suspense } from 'react';
import MyObject from './MyObject';
import { Canvas } from '@react-three/fiber';

export default function PlanetRender({ foundTexture }) {
  return (
    <div id="planetRender">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Suspense fallback={null}>
          <MyObject foundTexture={foundTexture} />
        </Suspense>
      </Canvas>
    </div>
  );
}
