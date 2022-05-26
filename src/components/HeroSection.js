import React from "react";
import { motion } from "framer-motion";
import Button from "./BuyButton";
import "../styles/HeroSection.scss";
import SectionTitle from "./SectionTitle";

const HS = "HeroSection";
export default function HeroSection() {
  return (
    <div className="HeroSection">
      {/* <div className="absolute top-2 right-2 lg:top-10 lg:right-5 z-10">
        <div className="flex items-center justify-center gap-1 lg:gap-2">

          <a className= "h-full text-white w-15 mr-6" href="/litepaper">
            <button className="Button">
              <p className="join">litepaper</p>
              <div className="bg-red-700 w-4/5 up h-1/2"></div>
              <div className="bg-red-500 w-4/5 down h-1/2"></div>
            </button>
          </a>
          <Socials />
        </div>
      </div> */}
      <img
        className="hidden lg:block w-full h-full object-cover  fixed top-0 left-0 z-0"
        src="/assets/fondo.jpg"
        alt="otaku origins"
      />
      <img
        className="lg:hidden w-full h-full object-cover  fixed top-0 left-0 z-0"
        src="/assets/fondo-mb.png"
        alt="otaku origins"
      />
      <div className="cont flex justify-center lg:block">
        <div className={`${HS}__title-section relative top-20 lg:top-0`}>
          <img className="logo" src="/assets/logo.svg" alt="logo" />
          <SectionTitle>
            <h1>Otaku Origins</h1>
          </SectionTitle>
          <p className="text-center w-3/4 mx-auto lg:w-full pb-6">
            The most unique anime NFT experience on any blockchain
          </p>

          <Button />
        </div>
      </div>{" "}
      <motion.img
        // initial={{ x: "100vh", opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ delay: 1, duration: 1 }}
        className="hidden lg:block lg:absolute h-full w-auto right-0  z-0"
        src="/assets/hero.png"
        alt="otaku origins"
      />
      <motion.img
        // initial={{ x: "100vh", opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ delay: 1, duration: 1 }}
        className="lg:hidden lg:absolute h-auto w-full right-0  z-0"
        src="/assets/hero-mobile.png"
        alt="otaku origins"
      />
    </div>
  );
}
