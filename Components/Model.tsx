"use client"
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
// Notice we removed 'Html' from the import
import { Environment, OrbitControls, useProgress, Float, ContactShadows } from '@react-three/drei';
import { Bag } from './Bag';

// 1. Standard React component (No <Html> wrapper needed!)
function LoadingOverlay() {
  const { progress, active } = useProgress();

  // Hide the spinner once loading is 100% complete
  if (!active) return null;

  return (
    // 'absolute inset-0 z-50' forces it to perfectly cover the 3D canvas container
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none">
      <div className="w-10 h-10 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin"></div>
      <p className="text-green-400 mt-3 font-bold tracking-widest text-sm drop-shadow-md">
        {progress.toFixed(0)}%
      </p>
    </div>
  );
}

function Model() {
  const controlsRef = useRef<typeof OrbitControls>(null);

  return (
    <>
      {/* 1. Spinner sits here, perfectly centered over the background glow */}
      <LoadingOverlay />

      {/* 2. We move the shifts and scales HERE, so they only affect the 3D Bag */}
      <div className="absolute inset-0 w-full h-full transform scale-[1.3] md:scale-[1.25] -translate-x-16 md:-translate-x-24 translate-y-12 md:translate-y-8">
      <Canvas 
          shadows 
          dpr={[1, 2]} // 👈 FIXES JAGGED EDGES: Renders in HD on Retina/Mobile screens
          camera={{ position: [-2, 0, 0], fov: 20, near:0.1, far:1000 }}
          gl={{ alpha: true, antialias: true }}
          style={{ background: 'transparent' }}
        >
          {/* Improved, softer lighting setup */}
          <ambientLight intensity={0.4} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

          <Suspense fallback={null}>
            {/* 👈 PREMIUM FEEL: Adds a smooth, organic hovering animation */}
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
              <Bag position={[0, 0, 0]} rotation={[0, Math.PI, 0]} scale={1} />
            </Float>
            
            {/* 👈 GROUNDING: Adds a soft, realistic drop-shadow below the bag */}
            <ContactShadows position={[0, -1.3, 0]} opacity={0.6} scale={5} blur={2.5} far={4} color="#000000" />
            
            {/* Swapped "studio" for "city" - it provides much richer, natural light reflections */}
            <Environment preset="city"/>
          </Suspense>
            
          <OrbitControls 
            //@ts-ignore
            ref={controlsRef}
            enableZoom={true} 
            minDistance={1.5} 
            maxDistance={3}  
            autoRotate={true} 
            autoRotateSpeed={0.8} // Slowed down slightly for a more luxurious feel
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
      </div>
    </>
  );
}

export default Model;