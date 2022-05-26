import React, { useEffect, useState } from "react";
import "../styles/Roadmap.scss";
import PhaseSection from "./PhaseSection";

const phases = [
  {
    heading: "Phase I: Drop",
    subs: [
      {
        sub: "COMMUNITY BUILDING",
        text: `Our main objective pre-mint is to build our community organically using
        our high-quality art and our love for anime as a focal point. We will be hosting
        anime trivia & art contests for prizes as well as weekly giveaways and anime watch
        parties leading up to our mint.`,
      },
      {
        sub: "WHITELIST AND PRE-SALES",
        text: `We will be rewarding our early members and active Otakus with presales at a
        lower cost over the course of our minting and marketing campaign.`,
      },
      {
        sub: "ESTABLISHING A DAO",
        text: `The DAO will be used to make decisions on allocation of community funds and
        future endeavors of the project. We are actively working to build a discord and
        verification system for our holders to join on initial mint. A percentage of mint
        sales and 25% of all secondary market royalties will go towards the DAO.`,
      },
      {
        sub: "MARKETPLACE/RARITY LISTINGS",
        text: `On mint we will open up secondary sales with one (or many) of the major marketplaces
        on Solana and will release a rarity ranking concurrently so that people can track their Otakus
        and make informed decisions when selling or buying.`,
      },
    ],
  },
  {
    heading: "Phase II: Grow the OtakuVerse",
    subs: [
      {
        sub: "MANGA/COMIC MAIN SERIES",
        text: `One of the core items on the OtakuOrigins roadmap is our very own Comic Book series
        featuring the Otakus. This series will be co-written and co-published with an indie manga
        artist and our community. Different arcs, plot details, character backstories, and much more
        will be voted on by the DAO members at regular intervals. A few lucky holders may even see
        their own characters introduced into the story.`,
      },
      {
        sub: "THE FIRST INDIE MANGA PUBLISHING DAO",
        text: `Aside from our main story arc, our DAO will find and sponsor indie authors and artists to
        help jump-start their own creative journeys and stories. Our ultimate goal for this is to become
        a hub to fund new and emerging authors/artists and provide utility through an active fanbase,
        publishing, and distribution.`,
      },
      {
        sub: "SPIN-OFF STORIES/WORLD EXPANSION",
        text: `In addition to our main DAO run story, we will be launching multiple spin-off series
        in parallel utilizing our characters and expanding the world we are creating.`,
      },
    ],
  },
  {
    heading: "Phase III: Game(Beta)",
    subs: [
      {
        sub: "DEFINING GAME THEORY",
        text: `As we expand the stories and develop the character lore, we want to create a game
        (or series of games) that is developed in conjunction with and defined by the manga so as to
        continue building on top of the unique world we have created as a community.`,
      },
      {
        sub: "LEVELING UP",
        text: `We will release version 1.0 of our game, allowing players to power up their Otakus.
        We envision this as a series of minigames that will make you better at the PvP aspect of the
        game on launch.`,
      },
    ],
  },
  {
    heading: "Phase IV: Full Game Release",
    subs: [
      {
        sub: "PVP",
        text: `Fight your Otaku against other players in a battling system that takes your training
        and traits into consideration.`,
      },
      {
        sub: "SINGLE-PLAYER MODE",
        text: `Solo mode where you can practice your moves, fight against unknown foes, and experience
        your own shonen journey.`,
      },
    ],
  },
];
export default function Roadmap() {
  const [currentPhase, setCurrentPhase] = useState(0);

  return (
    <div className="Roadmap relative">
      <img className="Roadmap__katana" src="/assets/katana.png" alt="katana" />
      <h3 id="roadmap" className="Roadmap__title capitalize ">
        Roadmap
      </h3>
      <div className="cont">
        <div className={`Roadmap__box`}>
          <div className="Roadmap__pagination-bullets">
            {phases.map((b, i) => (
              <div
                key={i}
                className={`bullet ${i === currentPhase ? "active" : ""}`}
              ></div>
            ))}
          </div>
          <div className="Roadmap__mapSide">
            {phases.map((phase, i) => (
              <PhaseSection
                key={i}
                phase={phase}
                setCurrentPhase={() => {
                  setCurrentPhase(i);
                }}
              />
            ))}
          </div>
          <div className="Roadmap__stickyImage">
            <img
              className="w-full"
              src="/assets/roadmap-char.png"
              alt="Character"
            />
          </div>
        </div>
        <img
          className="w-2/3 mx-auto max-w-sm md:hidden mt-5"
          src="/assets/roadmap-char.png"
          alt="Character"
        />
      </div>
    </div>
  );
}
