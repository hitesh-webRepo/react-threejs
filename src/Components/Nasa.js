import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/nasa.gltf");

  useFrame(() => {
    group.current.rotation.y = group.current.rotation.y + 0.001;
  });

  return (
    <mesh position={[4, 3, 1]} rotation={[-1.4, 1, 0]} scale={0.015}>
      <ambientLight color="#ff0000" />
      <directionalLight position={[0, 0, 0]} color={"#FE703E"} />
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.mesh_0.geometry}
            material={materials.material}
          />
        </group>
      </group>
    </mesh>
  );
}

useGLTF.preload("/nasa.gltf");
