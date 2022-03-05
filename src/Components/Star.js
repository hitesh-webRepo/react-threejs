import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Star = () => {
  return (
    <mesh>
      {Array.from({ length: 1000 }).map((_, i) => (
        <S
          key={i}
          position={[
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
          ]}
        />
      ))}
    </mesh>
  );
};

const S = (props) => {
  const ref = useRef();

  useFrame(() => {
    ref.current.position.z = ref.current.position.z + 0.06;
    if (ref.current.position.z > 10) ref.current.position.z = -100;
  });

  return (
    <Sphere {...props} ref={ref} args={[0.03]}>
      <meshBasicMaterial color={"#ffffff"} />
    </Sphere>
  );
};

export default Star;
