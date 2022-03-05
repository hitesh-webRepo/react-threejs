import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import AnimatedSphere from "../AnimatedShpere";
import Card from "../Card";
import Container from "../Container";
import Heading from "../Heading";
import YellowShpere from "../YellowSphere";

const CardsSection = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <Container>
        <div className=" lg:py-24 md:py-16 sm:py-10 py-5">
          <div className="flex flex-col text-center w-full mb-20 lg:px-40 md:px-20 sm:px-10 px-5">
            <Heading
              text="Designed for the businesses - small & medium scale alike!"
              className="lg:px-28 px-5 text-5xl text-white"
            />
            <p className=" mx-auto leading-relaxed text-lg text-white mt-5">
              With Lift, you can do any type of work at anytime you like.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-between relative">
            <div
              className="absolute -left-40 -top-40"
              style={{ height: "450px", width: "450px" }}
            >
              <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight position={[10, 6, 5]} intensity={1} />
                <Suspense fallback={null}>
                  <YellowShpere />
                </Suspense>
              </Canvas>
            </div>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <h1 className="text-lg text-white text-center mb-10 md:mt-0 mt-10">
          See Our Past Works
        </h1>
      </Container>
    </section>
  );
};

export default CardsSection;
