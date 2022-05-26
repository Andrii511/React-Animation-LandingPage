import React, { useEffect, useState } from "react";
import "../styles/Team.scss";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const team = [
  {
    name: "Agucab",
    position: "Co-founder / Developer",
    twitter: "https://twitter.com",
    avatar: "/assets/agucab.jpg",
  },
  {
    name: "Yerbamati",
    position: "Co-founder / Developer",
    twitter: "https://twitter.com",
    avatar: "/assets/yerbamati.jpg",
  },
  {
    name: "Lliam",
    position: "Growth Marketing / Dao Manager",
    twitter: "https://twitter.com",
    avatar: "/assets/lliam.jpg",
  },
  {
    name: "Coltt",
    position: "artist",
    twitter: "https://twitter.com",
    avatar: "/assets/coltt.jpg",
  },
  {
    name: "Skiiip",
    position: "Comic Author",
    twitter: "https://twitter.com",
    avatar: "/assets/skiiip.jpg",
  },
];
export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [effect, setEffect] = useState(true);
  useEffect(() => {
    const width = window.innerWidth;
    width < 450 && setEffect(false);
  }, []);
  const cont = { hidden: {}, show: { transition: { staggerChildren: 0.5 } } };
  const item = { hidden: { opacity: 0 }, show: { opacity: 1 } };
  return (
    <div className="bg-black relative">
      <div className="cont">
        <div id="team" className="Team">
          <SectionTitle>
            <span className="uppercase">Team</span>
          </SectionTitle>
          <p className="Team__subHeading">
            Were a bunch of Otakus just like you! We love anime and want to
            bring our passion into the blockchain world where we can live
            vicariously through our own Otaku NFTs
          </p>
          <motion.div
            ref={ref}
            variants={cont}
            animate={inView ? "show" : "hidden"}
            className="Team__team-grid"
          >
            {team.map((t, i) => (
              <motion.div
                variants={effect && item}
                key={i}
                className="Team__member"
              >
                <img className="avatar" src={t.avatar} alt={t.name} />
                <div className="about-block">
                  <div className="flex w-full justify-end mb-auto  "></div>
                  <div className="flex flex-col">
                    <p className="name">{t.name}</p>
                    <p className="position">{t.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
