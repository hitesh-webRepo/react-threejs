import React from "react";
import Container from "./Container";
const NavBar = () => {
  return (
    <header className="bg-header text-white body-font z-10 relative">
      <Container>
        <div className=" flex items-center justify-between">
          {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> */}
          <img src="images/logo.png" />
          {/* </a> */}
          <div className="md:ml-auto flex items-center">
            <div className="md:block hidden">
              <nav className=" flex flex-wrap items-center text-base justify-center">
                <div className="flex mr-5 items-center">
                  <a className="text-xs  font-semibold hover:text-gray-900">
                    WHAT WE OFFER
                  </a>
                  <img className="mx-2" src="images/Arrow.svg" />
                </div>
                <div className="flex mr-5 items-center">
                  <a className="text-xs  font-semibold hover:text-gray-900">
                    INDUSTRIES
                  </a>
                  <img className="mx-2" src="images/Arrow.svg" />
                </div>
                <a className="mr-5 text-xs font-semibold hover:text-gray-900">
                  OUR WORKS
                </a>
                <div className="flex mr-5 items-center">
                  <a className="text-xs  font-semibold hover:text-gray-900">
                    COMPANY
                  </a>
                  <img className="mx-2" src="images/Arrow.svg" />
                </div>
              </nav>
            </div>
            <div className="md:hidden block ">
              <img
                src="/images/burger-menu.png"
                alt=""
                className="burgerMenu"
              />
            </div>
          </div>
          <button className="inline-flex md:block hidden  items-center bg-secondaryButton text-white border-0 py-2 text-xs font-semibold  px-4 focus:outline-none  rounded-md text-base mt-4  md:mt-0">
            SCHEDULE DEMO
          </button>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
