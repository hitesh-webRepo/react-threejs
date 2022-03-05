import NavBar from "./Components/NavBar";
import HeroSection from "./Components/Sections/HeroSection";
import CardsSection from "./Components/Sections/CardsSection";
import BrandNeedsSection from "./Components/Sections/BrandNeedsSection";
import AwardWinningSection from "./Components/Sections/AwardWinningSection";
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
