import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshBasicMaterial, SphereBufferGeometry } from 'three';

const SpinningSphere = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

export default SpinningSphere;