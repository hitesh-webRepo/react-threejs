import { Sphere } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three";

export default function YellowShpere() {
  const colorMap = useLoader(TextureLoader, "moon.jpg");
  const ref = useRef();

  // useFrame(() => {
  //   ref.current.rotation.x = ref.current.rotation.y += 0.001;
  // });

  return (
    <>
      <Sphere ref={ref} visible args={[1, 100, 200]} scale={2.5}>
        <ambientLight intensity={0.1} color="#ccc" />
        <pointLight position={[0, 3, 1]} intensity={1} color="#FE703E" />
        <directionalLight position={[0, 2, 0]} intensity={1} color="#Ffffff" />
        <meshStandardMaterial map={colorMap} />
      </Sphere>
    </>
  );
}
