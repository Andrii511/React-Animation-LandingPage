import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import OriginsSection from "../components/OriginsSection";
import { Link, animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router-dom";
import Slider from "../components/NftsSlider";
import WhatIsOtaku from "../components/WhatIsOtaku";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import JoinUs from "../components/JoinUs";
import JoinUsMob from "../components/JoinUsMob";

export default function Home({ scrolled }) {
  const location = useLocation();
  const hash = location?.hash;
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -0,
    duration: 500,
    activeClass: "active",
  };
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(
        hash ? hash.replace("#", "") : "top"
      );
      if (element) element.scrollIntoView();
    }
  }, [hash]);
  return (
    <div>
      <HeroSection />
      <WhatIsOtaku />
      <Slider />
      <OriginsSection />
      <Roadmap />
      <Team />
      <FAQ />
      <JoinUsMob />
      <JoinUs />

      {scrolled && (
        <Link
          {...linkProps}
          to="top"
          className=" scrollUp transition-all w-10 h-10 fixed z-30  right-5  rounded-full  flex justify-center items-center cursor-pointer "
        >
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="20" x2="12" y2="4" />
            <polyline points="6 10 12 4 18 10" />
          </svg>
        </Link>
      )}
    </div>
  );
}
