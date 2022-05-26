import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Socials from "./Socials";
import { useLocation } from "react-router-dom";
export default function Footer() {
  const location = useLocation();
  const isHome = location?.pathname === "/";
  const [showFooter, setShowFooter] = useState(true);
  useEffect(() => {
    if (location && !isHome && location?.pathname !== "/comics") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);
  return (
    <section
      id="socials"
      className={`${
        showFooter ? "h-auto relative z-10 bg-black" : "h-0"
      } overflow-hidden`}
    >
      <div className="py-5 bg-black w-full text-white flex flex-col items-center">
        <div className="w-32 mb-4">
          <Logo section="footer" />
        </div>

        <Socials />
      </div>
      <a
        className="text-xs text-center block text-white mb-8"
        href="mailto:team@otakuorigins.com"
      >
        team@otakuorigins.com
      </a>
      <p className="text-xs text-center pb-2 text-white">
        Copyright otakuorigins 2021. All rights reserved.
      </p>
    </section>
  );
}
