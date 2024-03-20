import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';

function SpinningCube() {
  const meshRef = useRef();
  const [color, setColor] = useState('blue');

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  const handleClick = () => {
    const newColor = color === 'blue' ? 'red' : 'blue';
    setColor(newColor);
  };

  return (
    <mesh ref={meshRef} onClick={handleClick}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default SpinningCube;