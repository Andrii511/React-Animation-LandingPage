import React, { useEffect, useState, useRef } from "react";
import "../styles/PhaseSection.scss";

import { useInView } from "react-intersection-observer";
import { motion, useTransform, useMotionValue } from "framer-motion";
const PS = "PhaseSection";
export default function PhaseSection({ phase, setCurrentPhase }) {
  const threshold = [];
  for (let i = 0; i < 100; i++) {
    threshold.push(parseFloat((i * 0.01).toFixed(2)));
  }
  const [triggered, setTriggered] = useState(false);
  const refer = useRef(null);
  const { ref, inView, entry } = useInView({
    threshold,
  });
  const [ref2, inView2] = useInView();

  const cont = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        // staggerChildren: 0.3,
      },
    },
  };
  const [y, setY] = useState(0);

  useEffect(() => {
    entry?.intersectionRatio && setY(entry?.intersectionRatio);
  }, [entry]);

  useEffect(() => {
    inView2 && setCurrentPhase();
  }, [inView2]);

  const item = {
    show: { y: "0%", opacity: 1 },
    hidden: {
      // y: "100%",
      opacity: 0,
    },
  };

  return (
    <div ref={ref}>
      <div
        style={{ opacity: y <= 0.5 ? y * 1 : y * 1.2, transition: "all 0.1s" }}
        // variants={cont}
        // ref={ref}
        // initial="hidden"
        // animate={triggered && "show"}
        className={PS + " relative"}
      >
        <p className={`${PS}__heading `}>{phase.heading}</p>
        <div
          ref={ref2}
          className="chapter_trigger absolute top-1/2 left-0 w-full pointer-events-none"
        ></div>
        <div className={`${PS}__phasesWrapper`}>
          {phase.subs.map((s, i) => (
            <motion.div variants={item} key={i} className={`${PS}__sub`}>
              <p className="heading">{s.sub}</p>
              <p className="text">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
