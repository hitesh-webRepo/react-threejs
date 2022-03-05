import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function YellowShpere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#FFD159"
        attach="material"
        distort={0.3}
        speed={1.3}
        roughness={0}
      />
    </Sphere>
  );
}
