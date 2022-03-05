import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function OrangeSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={3}>
      <MeshDistortMaterial
        color="#FE6533"
        attach="material"
        distort={0.1}
        speed={1.3}
        roughness={0}
      />
    </Sphere>
  );
}
