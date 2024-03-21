import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';
import * as THREE from 'three';
import { Canvas as ThreeCanvas } from '@react-three/fiber';



const SpinningSphere = ({ position, colorStart, colorEnd }) => {
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
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);

  context.fillStyle = gradient;
  context.fillRect(0, 0, 2, 32);

  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const OrbitingSpheres = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SpinningSphere position={[-2, 0, 0]} colorStart="red" colorEnd="blue" />
      <SpinningSphere position={[2, 0, 0]} colorStart="green" colorEnd="yellow" />
    </Canvas>
  );
};

export default OrbitingSpheres;