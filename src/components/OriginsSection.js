import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";
import "../styles/OriginsSection.scss";
export default function OriginsSection() {
  const [readMore, setReadMore] = useState(false);
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("80px");
  const [hovered, setHovered] = useState(false);
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
    <section className="w-full h-full z-10 relative bg-black py-5  lg:py-10 xl:py-20">
      <div className="cont h-full ">
        <div
          id="origins"
          className={`OriginsSection ${readMore ? "enclose" : ""}`}
        >
          <div className="OriginsSection__about">
            <SectionTitle>ORIGINS</SectionTitle>
            <div className="OriginsSection__text relative">
              <p className="pt-8 pb-5">
                It&apos;s the year 2022 on planet earth and you&apos;re sitting
                at home binge streaming that new Shōnen your buddy recommended.
                You&apos;re on your 11th episode of the night and approaching
                the end of the 981 episode arc - eyes red from reading Japanese
                subtitles, mind drifting, wondering if it&apos;s worth it to
                read the manga when you&apos;ve caught up. All of a sudden, a
                beam of light bursts from the screen and hits you square in the
                chest. Your body surges with energy, your senses heighten, the
                room starts to spin and you begin to panic. This is too much to
                handle. You collapse. Some time later...
                <br /> <br />
              </p>
              {/* <p className="py-5">

              </p> */}
              <p
                ref={content}
                style={{
                  maxHeight: `${setHeight}`,
                  transition: "all 0.5s",
                }}
                className={``}
              >
                You open your eyes. Your head is ringing. You start to come back
                to yourself, to put the pieces together. What happened last
                night? It&apos;s hard to remember everything. You were watching
                TV, but now… where are you? This isn&apos;t the room you were
                in. You blink and take in the large field around you, feel the
                sun&apos;s warmth on your skin. As you sit up you see others
                around you, some lying in the grass while others wander around
                their new surroundings slowly. Everyone is in the same state of
                silent shock and recalibration. Suddenly, a booming voice breaks
                the stillness, shakes the ground beneath you, and echoes
                throughout, “ALL ASSETS HAVE BEEN UPLOADED.”
                <p className="py-5">
                  To be continued... Follow the journey in the first issue of
                  Otaku Origins!
                </p>
              </p>
              <div className={`gradient ${setActive ? "h-0" : "h-40"}`}></div>
            </div>
            <button
              onClick={toggleAccordion}
              className={`OriginsSection__button mt-10 ${
                readMore ? "showMore" : ""
              }`}
            >
              {setActive ? "Show less" : "keep reading"}
            </button>
            <a href="https://discord.gg/XUfkfmNy33" className="follow">
              <img
                className="mr-2 h-5 w-auto inline-block"
                src="/assets/discordicon.png"
                alt="follow discord"
              />
              Follow the Otaku&apos;s journey in our discord!
            </a>
          </div>
          <motion.img
            onMouseLeave={() => {
              setHovered(false);
            }}
            onMouseEnter={() => {
              setHovered(true);
            }}
            animate={
              hovered
                ? {
                    x: [0, -2, -1, 5, -2, 0],
                    y: [0, 1, -2, -1, 1, 0],
                    opacity: [1, 0.2, 1, 0.2, 1],
                  }
                : { x: 0, y: 0, opacity: 1 }
            }
            transition={
              hovered && {
                repeatType: "mirror",
                repeatDelay: 1,
                times: [0.5, 0.05, 1, 0.5, 1],
                // duration: 1,
                repeat: "Infinity",
                ease: "easeInOut",
              }
            }
            className="OriginsSection__image"
            src="/assets/origins.png"
            alt="phase"
          />
        </div>
      </div>
    </section>
  );
}
