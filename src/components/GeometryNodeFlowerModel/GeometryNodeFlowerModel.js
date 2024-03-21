import React from 'react';
import { useGLTF } from '@react-three/drei';

function GeometryNodeFlowerModel({ ...props }) {
  const { nodes, materials } = useGLTF('/public/poly.glb');
  return (
    <group {...props}>
      <mesh geometry={nodes.mesh_0.geometry} material={materials.material_0} />
      <mesh geometry={nodes.mesh_1.geometry} material={materials.material_1} />
      {/* Add more meshes if your model has more parts */}
    </group>
  );
}

export default GeometryNodeFlowerModel;