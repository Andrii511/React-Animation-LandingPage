import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

import "../styles/JoinUs.scss";

export default function JoinUsMob() {
  const [email, setEmail] = useState("");
  return (
    <div className="lg:hidden w-full bg-black relative lg:py-10 overflow-x-hidden join">
      <div className="cont relative ">
        <div className="JoinUs pb-10 relative">
          <div className="JoinUs__emailWrapper">
            <p className="JoinUs__title">
              Join Our
              <br /> Community
            </p>
            <p className="JoinUs__disclaimer ">
              Join us to get the news as soon as possible and follow our latest
              announcements and drop your email for exclusive updates on our
              project.
            </p>
          </div>
          <div className="relative w-full mb-5 flex justify-center">
            <motion.img
              className="ninja-mob relative z-10"
              src="/assets/ninja.png"
              alt="bg"
            />

            <img
              className="fondo absolute h-2/3 object-cover top-1/2 left-0 transform -translate-y-1/2 "
              src="/assets/fondo.jpg"
              alt="bg"
            />
          </div>
          <div className="w-full px-2.5">
            <form className="enterMail ">
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
        </div>
      </div>
    </div>
  );
}
