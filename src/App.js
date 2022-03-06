import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import AwardWinningSection from "./Components/Sections/AwardWinningSection";
import BrandNeedsSection from "./Components/Sections/BrandNeedsSection";
import CardsSection from "./Components/Sections/CardsSection";
import HeroSection from "./Components/Sections/HeroSection";
import OneCallWaySection from "./Components/Sections/OneCallWaySection";

function App() {
  return (
    <div className="bg-section text-white overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <CardsSection />
      <BrandNeedsSection />
      <AwardWinningSection />
      <OneCallWaySection />
    </div>
  );
}

export default App;
