import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";
import "../styles/WhatIsOtaku.scss";
export default function WhatIsOtaku() {
  const [readMore, setReadMore] = useState(false);
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("80px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "80px" : `${content.current.scrollHeight}px`
    );
  }
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.05,
  });
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const listItem = {
    hidden: { opacity: 0, y: "50%" },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section className="w-full h-full z-10 relative bg-black pt-10 py-5 lg:py-10 xl:py-20">
      <div className="cont h-full ">
        <div
          id="what-is"
          className={`WhatIsOtaku ${readMore ? "enclose" : ""}`}
        >
          <img
            className="WhatIsOtaku__image hidden lg:block"
            src="/assets/phase3.png"
            alt="phase"
          />
          <div className="WhatIsOtaku__about">
            <SectionTitle>
              WHAT IS <br className="hidden lg:block" /> OTAKU <br /> ORIGINS?
            </SectionTitle>
            <div className="WhatIsOtaku__text relative">
              <p className="pt-8 pb-5">
                Otaku Origins follows the journey of 5000 individuals that got
                sucked into the OtakuVerse and received some special powers and
                weapons along the way. These Otakus must now learn to live a new
                life in this mysterious world with features, powers, and gear
                inspired by the most memorable protagonists and antagonists
                anime has to offer. Each Otaku is algorithmically generated from
                a random combination of over 200 beautifully drawn traits across
                8 different categories that influence their rarity, power, and
                uniqueness.
                <br /> <br />
              </p>

              <p
                ref={content}
                style={{
                  maxHeight: `${setHeight}`,
                  transition: "all 0.5s",
                }}
                className={``}
              >
                Each character is a 1/1 digital collectible that doubles as your
                entrance ticket into the Otaku Indie DAO and the world we are
                creating. Using the characters we’ve designed, we will build out
                a full world: our very own OtakuVerse, driven by the community
                and managed by our very own DAO. The scope of this project is
                beyond just the NFT collectible and by owning an Otaku, you will
                have access to all of it. Holding an Otaku allows you to be
                directly involved in influencing the story for our future comic
                book series by voting at regular intervals on story details and
                plot points. As a member of the DAO, you will also be funding
                and supporting emerging indie authors and artists to publish
                their own comic series and to create additional story lines,
                immersive games, and experiences for the OtakuVerse. Every
                holder will receive special airdrops of NFTs from the creative
                process of the funded authors. Your decisions will have a direct
                impact on the growth of our project and this new form of content
                creation on a scale never before possible. How cool is that?!
                <br /> <br />
                This is just the start and the future is bright; join us to make
                Otaku Origins the best anime themed NFT project on any
                blockchain!
              </p>

              {/* <p className="py-5"></p> */}

              <div className={`gradient ${setActive ? "h-0" : "h-40"}`}></div>
            </div>
            <button
              onClick={toggleAccordion}
              className={`WhatIsOtaku__button mt-10 ${
                readMore ? "showMore" : ""
              }`}
            >
              {setActive ? "Show less" : "keep reading"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
