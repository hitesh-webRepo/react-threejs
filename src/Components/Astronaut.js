import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/astronaut.gltf");

  useFrame(() => {
    // group.current.rotation.z = group.current.rotation.z += 0.001;
    group.current.rotation.y = group.current.rotation.y += 0.001;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.6} rotation={[-0.5, 0, 0]} position={[0, -0.4, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 1.64, -0.14]}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={nodes.Object_4.material}
            />
          </group>
          <group position={[0, 3.11, 0.12]} scale={[1.47, 1.53, 1.49]}>
            <mesh
              geometry={nodes.Object_6.geometry}
              material={nodes.Object_6.material}
            />
          </group>
          <group position={[0, 1.84, -1.06]} scale={[0.78, 0.39, 0.39]}>
            <mesh
              geometry={nodes.Object_8.geometry}
              material={nodes.Object_8.material}
            />
          </group>
          <group position={[0, 1.91, -1.04]}>
            <mesh
              geometry={nodes.Object_10.geometry}
              material={nodes.Object_10.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/astronaut.gltf");
