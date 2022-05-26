import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import "../styles/JoinUs.scss";
import { useInView } from "react-intersection-observer";

export default function JoinUs() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    };
    fetch(
      "https://originspl.bubbleapps.io/api/1.1/wf/ooemails/",
      requestOptions
    );
    setEmail("");
  };

  return (
    <div className="hidden  w-full bg-black relative lg:flex items-center overflow-x-hidden">
      <img className="fondo-desk" src="/assets/fondo.jpg" alt="bg" />

      <div ref={ref} className="cont relative z-10">
        <div className="JoinUs  relative">
          <div className="JoinUs__emailWrapper">
            <p className="JoinUs__title">
              Join Our
              <br /> Community
            </p>
            <p className="JoinUs__disclaimer">
              Join us to get the news as soon as possible and follow our latest
              announcements and drop your email for exclusive updates on our
              project.
            </p>
            <form onSubmit={handleSubmit} className="enterMail">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
              />
              <div className="submit">
                <Button />
              </div>
            </form>
          </div>
          <div className="JoinUs__image">
            <div className="hidden lg:block">
              <motion.img
                className="ninja h-auto w-auto t z-10 "
                src="/assets/ninja.png"
                alt="bg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
