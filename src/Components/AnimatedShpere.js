import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={3}>
      <MeshDistortMaterial
        color="#45E0A8"
        attach="material"
        distort={0.2}
        speed={1.3}
        roughness={0}
      />
    </Sphere>
  );
}
