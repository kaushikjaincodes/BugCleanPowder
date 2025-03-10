import React, { useRef,useState } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { MathProps, ReactProps, EventHandlers, InstanceProps } from '@react-three/fiber';
import { Mutable, Overwrite } from '@react-three/fiber/dist/declarations/src/core/utils';

export function Bag(props: React.JSX.IntrinsicAttributes & Mutable<Overwrite<Partial<Overwrite<THREE.Group<THREE.Object3DEventMap>, MathProps<THREE.Group<THREE.Object3DEventMap>> & ReactProps<THREE.Group<THREE.Object3DEventMap>> & Partial<EventHandlers>>>, Omit<InstanceProps<THREE.Group<THREE.Object3DEventMap>, typeof THREE.Group>, "object">>>) {
  const group = useRef<THREE.Group>(null);
  const { nodes } = useGLTF("/3dmodel.glb");
  const [userInteracted, setUserInteracted] = useState(false);
  // Load your product image texture
  const productTexture = useTexture("/texture.png", (texture) => {
    texture.anisotropy = 16;
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
  });

  // Configure texture mapping
  productTexture.wrapS = productTexture.wrapT = THREE.ClampToEdgeWrapping;
  productTexture.rotation = Math.PI / 2;
  productTexture.center.set(0.5, 0.5);
  // Adjust these values based on the new image
  productTexture.repeat.set(2.5, 1.4);
  productTexture.offset.set(-0.41, 0.1);

  useFrame(({ clock }) => {
    if (group.current && !userInteracted) {
      group.current.rotation.y += 0.0001; 
    }
  });

  return (
    <group ref={group} {...props} dispose={null} onPointerDown={() => setUserInteracted(true)}>
      {/* Front of the bag */}
      <mesh castShadow receiveShadow geometry={(nodes.ATR001_Doypack_0 as THREE.Mesh).geometry}>
        <meshPhysicalMaterial 
          map={productTexture}
          side={THREE.DoubleSide}
          transparent={true}
          alphaTest={0.5}
          roughness={0.5}
          metalness={0.05}
          clearcoat={0.1}
          clearcoatRoughness={0.7}
          envMapIntensity={1.2}
        />
      </mesh>
      
      {/* Back of the bag */}
      <mesh 
        castShadow 
        receiveShadow 
        geometry={(nodes.ATR001_Doypack_0 as THREE.Mesh).geometry}
        rotation={[0, Math.PI, 0]}
        position={[0.003, 0, 0]} // Very small offset to prevent z-fighting
      >
        <meshPhysicalMaterial 
          map={productTexture}
          side={THREE.DoubleSide}
          transparent={true}
          alphaTest={0.1}
          roughness={0.2}
          metalness={0.1}
          clearcoat={0.3}
          clearcoatRoughness={0.1}
          envMapIntensity={1.2}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/3dmodel.glb');