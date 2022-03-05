import { Sphere } from "@react-three/drei";
import React, { useRef } from "react";

export default function AnimatedSphere() {
  const ref = useRef();
  return (
    <Sphere ref={ref} visible args={[1, 100, 200]} scale={3}>
      <meshPhongMaterial color="#45E0A8" />
    </Sphere>
  );
}
