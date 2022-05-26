import React, { useState } from "react";
import PartPicker from "../components/AttributesRarity/PartPicker";
import PiecePicker from "../components/AttributesRarity/PiecePicker";
import "../styles/AttributesRarity.scss";
import { backs } from "../builder-db/backs";
import { weapons } from "../builder-db/weapons";
import { clothes } from "../builder-db/clothing";
import { bodies } from "../builder-db/bodies";
import { faceAccessory } from "../builder-db/faceAccessory";
import { bodyAccessory } from "../builder-db/bodyAccessory";
import { eyes } from "../builder-db/eyes";
import { hairs } from "../builder-db/hairs";
import Stats from "../components/AttributesRarity/Stats";
const AR = "AttrRarity";
const parts = {
  back: backs,
  body: bodies,
  weapon: weapons,
  clothes: clothes,
  faceAccessory: faceAccessory,
  bodyAccessory: bodyAccessory,
  eyes: eyes,
  hair: hairs,
};
export default function AttributesRarity() {
  const [nft, setNft] = useState({
    back: {
      id: "city_lights",
      label: backs["city_lights"].label,
      rarity: backs["city_lights"].rarity,
      zIndex: 0,
    },
    weapon: {
      id: "demon_katana",
      label: weapons["demon_katana"].label,
      rarity: weapons["demon_katana"].rarity,
      zIndex: 0,
    },
    body: {
      id: "tan",
      label: bodies["tan"].label,
      rarity: bodies["tan"].rarity,
      zIndex: 0,
    },
    position: 1,
    clothes: {
      id: "bulls_jersey",
      label: clothes["bulls_jersey"].label,
      rarity: clothes["bulls_jersey"].rarity,
      zIndex: 0,
    },
    faceAccessory: {
      id: "none",
      label: faceAccessory["none"].label,
      rarity: faceAccessory["none"].rarity,
      zIndex: 0,
    },
    bodyAccessory: {
      id: "none",
      label: bodyAccessory["none"].label,
      rarity: bodyAccessory["none"].rarity,
      zIndex: 0,
    },
    eyes: {
      id: "black_eyes",
      label: eyes["black_eyes"].label,
      rarity: eyes["black_eyes"].rarity,
      zIndex: 0,
    },
    hair: {
      id: "none",
      label: hairs["none"].label,
      rarity: hairs["none"].rarity,
      zIndex: 0,
    },
  });
  const [part, setPart] = useState("body");
  const [partObject, setPartObject] = useState(parts[part]);
  const handlePickPart = (e) => {
    setPart(e.currentTarget.value);
    setPartObject(parts[e.currentTarget.value]);
  };
  const handlePickPiece = ({ value, subValue }) => {
    setNft((prev) => {
      return part === "weapon"
        ? { ...prev, [part]: value, position: subValue }
        : { ...prev, [part]: value };
    });
  };

  return (
    <div className="AttrRarity min-h-screen bg-black pt-10 lg:pt-28">
      <div className="cont">
        <div className={`${AR}__grid text-white text-2xl`}>
          <PartPicker part={part} pickPart={handlePickPart} />
          <div className="hidden md:block w-px md:w-full">
            <PiecePicker
              currentPiece={nft[part].id}
              pieces={partObject}
              pickPiece={handlePickPiece}
            />
          </div>
          <div>
            <div className="w-full relative bg-black ">
              <div
                style={{ paddingBottom: "100%" }}
                className="w-full relative rounded-3xl overflow-hidden bg-black"
              >
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  style={{ zIndex: 1 + nft.back.zIndex }}
                  src={backs[nft.back.id]?.src}
                  alt={backs[nft.back.id]?.label}
                />
                <img
                  className="absolute w-full h-full top-0 left-0"
                  style={{ zIndex: 2 + nft.body.zIndex }}
                  src={bodies[nft.body.id][nft.position].src}
                  alt={bodies[nft.body.id]?.label}
                />
                <img
                  className="absolute w-full h-full top-0 left-0"
                  style={{ zIndex: 1 + nft.weapon.zIndex }}
                  src={weapons[nft.weapon.id][nft.body.id]}
                  alt={weapons[nft.weapon.id]?.label}
                />
                <img
                  className="absolute w-full h-full top-0 left-0"
                  style={{ zIndex: 4 + nft.clothes.zIndex }}
                  src={clothes[nft.clothes.id][nft.position]}
                  alt={clothes[nft.clothes.id]?.label}
                />
                <img
                  className="absolute w-full h-full top-0 left-0"
                  style={{ zIndex: 4 + nft.faceAccessory.zIndex }}
                  src={faceAccessory[nft.faceAccessory.id].src}
                  alt={faceAccessory[nft.faceAccessory.id]?.label}
                />
                <img
                  className="absolute w-full h-full top-0 left-0"
                  style={{ zIndex: 3 + nft.bodyAccessory.zIndex }}
                  src={bodyAccessory[nft.bodyAccessory.id].src}
                  alt={bodyAccessory[nft.bodyAccessory.id]?.label}
                />
                <img
                  className="absolute w-full h-full top-0 left-0"
                  style={{ zIndex: 3 + nft.eyes.zIndex }}
                  src={eyes[nft.eyes.id].src}
                  alt={eyes[nft.eyes.id]?.label}
                />
                {nft.hair.id && (
                  <img
                    className="absolute w-full h-full  top-0 left-0"
                    style={{ zIndex: 4 + nft.hair.zIndex }}
                    src={
                      hairs[nft.hair.id]?.[
                        nft.body.id === "tan" ? "white" : nft.body.id
                      ]
                    }
                    alt={hairs[nft.hair.id]?.label}
                  />
                )}
              </div>
              <div className="block md:hidden">
                <PiecePicker
                  currentPiece={nft[part].id}
                  pieces={partObject}
                  pickPiece={handlePickPiece}
                />
              </div>
            </div>
            <div className="md:block hidden">
              {" "}
              <Stats stats={nft} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
