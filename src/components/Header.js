import React, { useState, useEffect } from "react";
import Burger from "./Burger";
import { Link } from "react-scroll";
import { Link as PageLink, useLocation } from "react-router-dom";
import Button from "./Button";
import Socials from "./Socials";
import "../styles/Header.scss";
const headerItems = [
  { id: "what-is", text: "What is Otaku Origins" },
  { id: "origins", text: "Origins" },
  { id: "roadmap", text: "Roadmap" },
  { id: "team", text: "our Team" },
  { id: "faqs", text: "FAQs" },
  // { id: "join the community", text: "Join Us" },
];
export default function Header({ scrolled }) {
  const location = useLocation();
  const isHome = location?.pathname === "/";
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(scrolled);
  const handleCloseMenu = () => {
    setShow(false);
  };
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -0,
    duration: 500,
    activeClass: "active",

    onClick: handleCloseMenu,
  };
  useEffect(() => {
    if (!isHome || scrolled) {
      setIsScrolled(true);
    } else {
      setIsScrolled(scrolled);
    }
  }, [isHome, scrolled]);
  return (
    <div id="header" className="font-bold w-full h-full">
      <div
        className={`hidden lg:block w-screen fixed top-0 left-0 z-20  py-5 header-desktop ${
          isScrolled || scrolled ? "scrolled" : ""
        }`}
      >
        <div className="cont flex justify-between ">
          {isHome ? (
            <Link
              to="top"
              className="header-logo block cursor-pointer"
              {...linkProps}
            >
              <img
                className="w-full"
                src="/assets/logo-header.svg"
                alt="logo"
              />
            </Link>
          ) : (
            <PageLink onClick={handleCloseMenu} to="/">
              <img
                className="w-full"
                src="/assets/logo-header.svg"
                alt="logo"
              />
            </PageLink>
          )}
          <div className="flex items-center gap-10 text-white uppercase ">
            {
              <PageLink
                onClick={handleCloseMenu}
                to="/attributes-rarity"
                className=""
              >
                Attributes/rarity
              </PageLink>
            }
            <PageLink
              onClick={handleCloseMenu}
              to="/dao-applications"
              className=""
            >
              dao applications
            </PageLink>
            <PageLink onClick={handleCloseMenu} to="/comics" className="">
              comics
            </PageLink>
            <a
              href="https://otaku-origins.gitbook.io/otakuorigins/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Whitepaper
            </a>
            <Socials />{" "}
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="z-30 fixed top-0 left-0 p-2.5 flex items-center h-10 menu-bar w-10 lg:hidden "
      >
        <div className="gap-1.5 rounded-full grid grid-rows-3 items-center  w-full   h-auto  cursor-pointer lg:hidden">
          <Burger show={show} />
        </div>
      </div>
      <div
        className={`${
          show ? "translate-x-0 " : "translate-x-full"
        }  right-0 top-0 fixed h-screen z-20  w-full bg-black p-4 flex flex-col items-center justify-center transition-all  pt-14   transform`}
      >
        <div className="w-full  flex flex-col items-center text-white mb-auto">
          <div className="h-px w-full bg-white opacity-20 "></div>
          <PageLink
            onClick={handleCloseMenu}
            to="/"
            className="text-3xl uppercase my-3"
          >
            Home
          </PageLink>
          <div className="h-px w-full bg-white opacity-20 "></div>
          <div className="my-5 font-manrope flex flex-col items-center uppercase gap-3 mb-7">
            {headerItems.map((item) =>
              isHome ? (
                <Link
                  key={`a_${item.id}`}
                  {...linkProps}
                  className="uppercase text-white cursor-pointer "
                  to={item.id}
                >
                  {item.text}
                </Link>
              ) : (
                <PageLink
                  onClick={handleCloseMenu}
                  key={`a_${item.id}`}
                  className="uppercase text-white cursor-pointer "
                  to={`/#${item.id}`}
                >
                  {item.text}
                </PageLink>
              )
            )}
          </div>
          <div className="h-px w-full bg-white opacity-20 "></div>
          <PageLink
            onClick={handleCloseMenu}
            to="/dao-applications"
            className="text-3xl uppercase my-3"
          >
            Dao applications
          </PageLink>
          <PageLink
            onClick={handleCloseMenu}
            to="/comics"
            className="text-3xl uppercase my-3"
          >
            Comics
          </PageLink>
          <a
            href="https://otaku-origins.gitbook.io/otakuorigins/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-3xl uppercase my-3"
          >
            Whitepaper
          </a>
        </div>
        <form className="enterMail">
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
        <div className="my-6">
          <Socials size="big" />
        </div>
      </div>
    </div>
  );
}
