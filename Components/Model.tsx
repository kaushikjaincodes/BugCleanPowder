"use client"
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Bag } from './Bag';

function Model() {
  const controlsRef = useRef<typeof OrbitControls>(null);

  return (
    <Canvas 
      shadows 
      camera={{ position: [-2, 0, 0], fov: 20, near:0.1, far:1000 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent' }}
    >
      {/* Reduced ambient light intensity */}
      <ambientLight intensity={0.1} />
      
      {/* Reduced directional light intensity */}
      <directionalLight position={[5, 5, 5]} intensity={0.1}/>

      <Suspense fallback={null}></Suspense>
        <Bag position={[0, 0, 0]} rotation={[0, Math.PI, 0]} scale={1} />
        
        {/* Reduced environment light intensity */}
        <Environment preset="studio"/>
  <OrbitControls 
    //@ts-ignore
    ref={controlsRef}
    enableZoom={true} 
    minDistance={1.5} 
    maxDistance={3}  
    autoRotate={true} // Enable auto rotation
    autoRotateSpeed={0.5} // Slow initial rotation
    onStart={() => {
      if (controlsRef.current) {
        //@ts-ignore
        controlsRef.current.autoRotate = true;
        //@ts-ignore
        controlsRef.current.autoRotateSpeed = 2;
      }
    }}  
  />
    </Canvas>
  );
}

export default Model;