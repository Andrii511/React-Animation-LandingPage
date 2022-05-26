import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../../hooks/useQuery";
import "../../../styles/ComicReader.scss";
import Reader from "./components/Reader";
import api from "../../../api/api";
import ConnectWalletModal from "../ConnectWalletModal";

export default function ComicReader({ connection }) {
  let query = useQuery();
  let navigate = useNavigate();
  const chapterID = query.get("chapter") || "otaku-chapter-1";
  const comicID = query.get("comic") || "otaku-origins";
  const btsId = query.get("bts");
  const action = query.get("action") || "preview";
  const wallet = useWallet();
  const [pages, setPages] = useState([]);
  const [currentChapter, setCurrentChapter] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const getPages = async () => {
      try {
        let endpoint = `comic/${comicID}/chapters`;
        if (btsId) {
          endpoint = `chapter/${chapterID}/bts`;
        }
        const pages = await api
          .post({
            endpoint,
            data: {
              wallet: wallet?.publicKey?.toBase58(),
            },
          })
          .then((response) => response?.data);
        if (!pages?.reader) return;
        setPages(pages.reader);
        setOptions(pages.reader.options);
        const id = btsId || chapterID;
        setCurrentChapter(pages.reader.pages.find((chapt) => chapt.uid === id));
      } catch (e) {
        console.log(e);
      }
    };
    if (chapterID) getPages();
  }, [wallet?.publicKey]);

  function setChapter(chapter) {
    let url = `/comic?action=${action}&comic=${comicID}&chapter=${chapter.uid}`;
    if (btsId)
      url = `/comic?action=${action}&chapter=${chapterID}&bts=${chapter.uid}`;
    window.scrollTo(0, 0);
    navigate(url);
    setCurrentChapter(pages.pages.find((chapt) => chapt.uid === chapter.uid));
  }

  useEffect(() => {
    const id = btsId || chapterID;
    setSelectedOption(options?.find((chapter) => chapter.uid === id));
  }, [chapterID, btsId, options]);

  if (!currentChapter || !selectedOption) return <></>;

  return (
    <>
      {!wallet.connected && (
        <ConnectWalletModal
          connection={connection}
          action={action}
          chapterID={chapterID}
          comicID={comicID}
        ></ConnectWalletModal>
      )}
      <Reader
        selectedOption={selectedOption}
        chapterList={options}
        setChapter={setChapter}
        reader={currentChapter}
        action={action}
      />
    </>
  );
}
