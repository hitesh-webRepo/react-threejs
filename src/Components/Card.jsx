import React from "react";

const Card = () => {
  return (
    <div
      className="p-5  z-20 w-full rounded-2xl "
      style={{ backgroundColor: "#333333" }}
    >
      <div className="h-full px-8 py-3   border-gray-300 flex flex-col relative overflow-hidden">
        <h2 className="text-2xl  mb-1 font-semibold text-white border-b border-thin pb-6">
          Branding & <br /> <span>Identity</span>
        </h2>
        <p className="flex items-center  my-3 text-lg text-white">
          Brand Strategy & Experience
        </p>
        <p className="flex items-center  mb-3 text-lg text-white">
          Go-To-Market Branding
        </p>
        <p className="flex items-center  mb-3 text-lg text-white">
          Digital Strategy
        </p>
        <p className="flex items-center  mb-3 text-lg text-white">
          UI & UX Designs
        </p>
        <p className="flex items-center  mb-3 text-lg text-white">
          Logo, Brouchers, Presentations & more
        </p>
      </div>
    </div>
  );
};

export default Card;
