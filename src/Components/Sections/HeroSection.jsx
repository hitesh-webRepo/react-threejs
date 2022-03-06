import { OrbitControls, RoundedBox, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense } from "react";
import Heading from "../Heading";
import Star from "../Star";

const Astronaut = React.lazy(() => import("../Astronaut")); // Lazy-loaded
const Rocket = React.lazy(() => import("../Nasa")); // Lazy-loaded

const HeroSection = () => {
  return (
    <section className="relative body-font w-full">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Canvas>
          <ambientLight intensity={0.5} color="#000000" />
          <directionalLight position={[-10, -2, 5]} />
          <Suspense fallback={null}>
            <Star />
            <Rocket />
          </Suspense>
        </Canvas>
      </div>
      <div className="grid grid-cols-2 px-12">
        <div className="w-full py-10 relative z-50">
          <h1
            className="text-base  my-4 font-medium"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            INTRODUCTING{" "}
            <span
              className="border-b-4 border-white ml-1 pb-1"
              style={{ color: "#FE703E" }}
            >
              LIFT UP!
            </span>
          </h1>
          <Heading
            text="Agency-Subscription Modal for fast moving brands"
            className="text-3xl text-white my-4"
          />
          <p className="mb-6 leading-relaxed text-gray-300">
            With Lift, each month your brand purchases a Block of Hours to be
            used for a variety of shifting design and digital needs that require
            constant attention.
          </p>
          <p className="mb-6 leading-relaxed text-gray-300">
            We offer you scalable, adjustable design & digital teams with
            month-to-month billing. Driving value where you need it, when you
            need it. Revolve is here to help you scale into the future.
          </p>
          <div className="flex">
            <button className="inline-flex text-white bg-secondaryButton border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg  font-semibold text-sm">
              GET AN ESTIMATE{" "}
            </button>
            <button className="ml-4 inline-flex text-white bg-primaryButton border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg  font-semibold text-sm">
              SCHEDULE A DEMO
            </button>
          </div>
        </div>
        <div
          className="absolute top-0 right-0 -z-0"
          style={{ height: "700px", width: "800px" }}
        >
          <Canvas>
            <ambientLight intensity={0.2} color="#ffffff" />
            <pointLight position={[0, 0, 3]} color="#FE703E" />
            <OrbitControls enableZoom={false} />
            <Suspense fallback={"Please wait loading ..."}>
              <Astronaut />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className=" lg:py-24 md:py-16 sm:py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className=" text-lg font-medium title-font mb-2 text-white">
            BRANDS THAT SCALED WITH LIFT!
          </h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
        </div>
        <div className="flex flex-wrap  text-center items-center">
          <div className=" px-4  sm:w-1/3  w-full">
            <div className=" px-4 py-6 rounded-lg">
              <img
                className="block mx-auto"
                src="/images/Vector.svg"
                alt="Vector"
              />
              {/* <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2> */}
              <p className="leading-relaxed mt-8 text-sm text-center">
                As a Design Experience Partner, we supported RentMethod (online
                rental platform) in a move to acquisition by Airbnb. Victory
                Dance.
              </p>
            </div>
          </div>
          <div className=" px-4 sm:w-1/3  w-full">
            <div className=" px-4 py-6 rounded-lg">
              <img
                className="block mx-auto"
                src="/images/Union.svg"
                alt="Union"
              />
              {/* <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2> */}
              <p className="leading-relaxed mt-8 text-sm text-center">
                As a Design Experience Partner, we supported RentMethod (online
                rental platform) in a move to acquisition by Airbnb. Victory
                Dance.
              </p>
            </div>
          </div>
          <div className="px-4  sm:w-1/3  w-full">
            <div className=" px-4 py-6 rounded-lg">
              <img
                className="block mx-auto"
                src="/images/Group.svg"
                alt="Group"
              />
              {/* <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2> */}
              <p className="leading-relaxed mt-8 text-sm text-center">
                As a Design Experience Partner, we supported RentMethod (online
                rental platform) in a move to acquisition by Airbnb. Victory
                Dance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Background = () => {
  useFrame(({ clock, camera }) => {
    const time = clock.getElapsedTime();
    camera.position.x = 5;
    camera.position.y = 2;

    if (time < 3) camera.position.z = time;
  });

  return (
    <>
      <RoundedBox position={[0, 3, 0]} scale={0.6}>
        <meshPhongMaterial color={"#000"} />
      </RoundedBox>
      <Sphere position={[4, 2, 0]}>
        <meshPhongMaterial color={"#db7019"} />
      </Sphere>
    </>
  );
};

export default HeroSection;
