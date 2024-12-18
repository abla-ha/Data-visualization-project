/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 lander.glb 
*/

'use client';

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const group = useRef();

  const { lat, long, num } = props;
  const degToRad = (deg) => (deg * Math.PI) / 180.0;

  useFrame(() => {
    group.current?.lookAt(0, 0, 0);
  });

  const r = 2;

  const { nodes, materials } = useGLTF('/assets/lander.glb');
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={0.0005}
      position={[
        r * Math.sin(Math.PI / 2 - degToRad(lat)) * Math.sin(degToRad(long)),
        r * Math.cos(Math.PI / 2 - degToRad(lat)),
        r * Math.sin(Math.PI / 2 - degToRad(lat)) * Math.cos(degToRad(long)),
      ]}
    >
      <mesh
        geometry={nodes.Apollo_lunar_module.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        material={materials['Material.001']}
      />
    </group>
  );
}

useGLTF.preload('/assets/lander.glb');