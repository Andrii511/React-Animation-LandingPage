import React from "react";

export default function Background() {
  return (
    <div>
      {/* background images adapted from HeroSection */}
      <img
        className="hidden lg:block w-full h-full object-cover  fixed top-0 left-0 z-0"
        src="/assets/fondo.jpg"
        alt="background"
      />
      <img
        className="lg:hidden w-full h-full object-cover fixed top-0 left-0 z-0"
        src="/assets/fondo-mb.png"
        alt="background"
      />
    </div>
  );
}
