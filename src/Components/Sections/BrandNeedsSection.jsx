import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Container from "../Container";
import Heading from "../Heading";
import OrangeSphere from "../OrangeSphere";

const BrandNeedsSection = () => {
  return (
    <Container>
      <div className="bg-navyBlue relative text-white lg:mt-40 md:mt-20 rounded-max ">
        <div className="absolute -top-24 right-36" style={{ height: "250px" }}>
          <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight position={[-5, -2, 3]} intensity={1} />
            <Suspense fallback={null}>
              <OrangeSphere />
            </Suspense>
          </Canvas>
        </div>

        <div className="px-10 py-20">
          <div className="md:flex ">
            <div className="md:w-1/2 w-full md:px-10">
              <Heading text="How Lift fuels your brand needs" />
              <p className="text-lg mt-4">
                With Lift, you can do any type of work at anytime you like. It’s
                you full squad only one call away.
              </p>
            </div>
          </div>

          <div className="md:flex md:mt-28 mt-20">
            <div className="md:w-1/2 w-full md:px-10">
              <p className="text-lg text-white">
                {" "}
                Month-to-Month Commitment - No long-term commitments. 30 day
                planning with a renewal option included. Built for the modern
                brand and modern team.
              </p>
            </div>
            <div className="md:w-1/2 w-full md:px-10 mt-10 md:mt-0">
              <p className="text-lg text-white">
                {" "}
                Month-to-Month Commitment - No long-term commitments. 30 day
                planning with a renewal option included. Built for the modern
                brand and modern team.
              </p>
            </div>
          </div>

          <div className="md:flex md:mt-28 mt-20">
            <div className="md:w-1/2 w-full md:px-10">
              <p className="text-lg text-white">
                {" "}
                Month-to-Month Commitment - No long-term commitments. 30 day
                planning with a renewal option included. Built for the modern
                brand and modern team.
              </p>
            </div>
            <div className="md:w-1/2 w-full md:px-10 mt-10 md:mt-0">
              <p className="text-lg text-white">
                {" "}
                Month-to-Month Commitment - No long-term commitments. 30 day
                planning with a renewal option included. Built for the modern
                brand and modern team.
              </p>
            </div>
          </div>

          <div className="md:flex md:mt-28 mt-20">
            <div className="md:w-1/2 w-full md:px-10">
              <p className="text-lg text-white">
                {" "}
                Month-to-Month Commitment - No long-term commitments. 30 day
                planning with a renewal option included. Built for the modern
                brand and modern team.
              </p>
            </div>
            <div className="md:w-1/2 w-full md:px-10 mt-10 md:mt-0">
              <p className="text-lg text-white">
                {" "}
                Month-to-Month Commitment - No long-term commitments. 30 day
                planning with a renewal option included. Built for the modern
                brand and modern team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BrandNeedsSection;
