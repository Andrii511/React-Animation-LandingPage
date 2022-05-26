import React, { useState, useEffect, useMemo } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DAOApplications from "../Pages/DAOApplications";
import Home from "../Pages/Home";
import { useWallet } from "@solana/wallet-adapter-react";
import Litepaper from "../Pages/Litepaper";
import AttributesRarity from "../Pages/AttributesRarity";

import ComicReader from "../components/comic-components/ComicReader/ComicReader";
import Comics from "../Pages/Comics";
import * as anchor from "@project-serum/anchor";
import { setComicVerificationList } from "../contexts/ComicsVerification/types";
import { StoreContext } from "../contexts/ComicsVerification/context";
import api from "../api/api";

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST;
const connection = new anchor.web3.Connection(
  rpcHost ? rpcHost : anchor.web3.clusterApiUrl("devnet")
);

function Page() {
  const [scrolled, setScrolled] = useState(false);
  const { dispatch } = React.useContext(StoreContext);
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false);
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const wallet = useWallet();
  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }
    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    };
  }, [wallet]);

  useEffect(() => {
    const getComics = async () => {
      const _comicVerificationList = await api
        .get({
          endpoint: `comics/auth/${anchorWallet?.publicKey.toBase58()}`,
        })
        .then((response) => response.data);

      dispatch(
        setComicVerificationList({
          comicVerificationList: _comicVerificationList,
        })
      );
    };
    if (anchorWallet?.publicKey) getComics();
  }, [anchorWallet?.publicKey]);

  return (
    <Router>
      <div>
        <div className="absolute top-0 h-px w-full" id="top"></div>
        <Header scrolled={scrolled} />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/litepaper" element={<Litepaper />} />
          <Route exact path="/dao-applications" element={<DAOApplications />} />
          <Route
            exact
            path="/attributes-rarity"
            element={<AttributesRarity />}
          />
          <Route
            exact
            path="/comics"
            element={<Comics connection={connection} />}
          />
          <Route
            exact
            path="/comic"
            element={<ComicReader connection={connection} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default Page;
