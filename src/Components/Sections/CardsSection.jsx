import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Card from "../Card";
import Heading from "../Heading";

const Moon = React.lazy(() => import("../Moon"));

const CardsSection = ({ scrollPos }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden relative">
      <div
        className="absolute"
        style={{ height: "450px", width: "450px", left: -24 }}
      >
        <Canvas>
          <OrbitControls enableZoom={false} />
          <Suspense fallback={"loading...."}>
            <Moon />
          </Suspense>
        </Canvas>
      </div>

      <div className="w-full px-24">
        <div className=" lg:py-24 md:py-16 sm:py-10 py-5">
          <div className="flex flex-col text-center w-full mb-20 lg:px-40 md:px-20 sm:px-10 px-5">
            <Heading
              text="Designed for the businesses - small & medium scale alike!"
              className="lg:px-28 px-5 text-3xl text-white"
            />
            <p className=" mx-auto leading-relaxed text-gray-300 mt-5">
              With Lift, you can do any type of work at anytime you like.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <h1 className="text-lg text-white text-center mb-10 md:mt-0 mt-10">
          See Our Past Works
        </h1>
      </div>
    </section>
  );
};

export default CardsSection;
