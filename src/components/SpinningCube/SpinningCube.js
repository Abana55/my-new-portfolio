import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SpinningCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  const canvas = document.createElement('canvas');
  canvas.width = 2;
  canvas.height = 32;
  const context = canvas.getContext('2d');

  const gradient = context.createLinearGradient(0, 0, 0, 32);
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(1, 'blue');

  context.fillStyle = gradient;
  context.fillRect(0, 0, 2, 32);

  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

  return (
    <mesh ref={meshRef} position={[1, 0, 0]}> 
      <sphereGeometry args={[2, 32, 32]} /> 
      <meshStandardMaterial color={""} />
    </mesh>
  );
};

export default SpinningCube;