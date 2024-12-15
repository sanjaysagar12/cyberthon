import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AboutUs from "./components/About";
import HeroSectionDesktop from "./components/hero/HeroSectionDesktop";
import HeroSectionMobile from "./components/hero/HeroSectionMobile";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: "#000" }}>
      <NavBar />
      {isMobile ? <HeroSectionMobile /> : <HeroSectionDesktop />}
      <AboutUs/>
    </div>
  );
}

export default App;
