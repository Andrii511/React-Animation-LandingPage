import React, { useState, useRef, useEffect } from "react";
import "../../styles/Stats.scss";
const stat_names = {
  back: "Back",
  weapon: "Weapon",
  body: "Body",
  position: "Body position",
  clothes: "Clothes",
  faceAccessory: "Face Accessory",
  bodyAccessory: "Body Accessory",
  eyes: "Eyes",
  hair: "Hair",
};
export default function Stats({ stats }) {
  const box = useRef();
  const [show, setShow] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const formattedStats = Object.entries(stats);
  useEffect(() => {
    setMaxHeight(box.current.scrollHeight);
  }, []);
  return (
    <div onClick={() => setShow(!show)} className="font-squada  pb-10">
      <div className="uppercase py-5 cursor-pointer">
        {show ? "Hide Stats" : "Show Stats"}
      </div>
      <div
        style={{ maxHeight: show ? maxHeight : 0 }}
        ref={box}
        className="grid grid-cols-3 gap-y-6 font-manrope  leading-none overflow-hidden transition-all"
      >
        {formattedStats.map(
          (stat) =>
            stat[0] !== "position" && (
              <div className="grid gap-y-1" key={stat[0]}>
                <div className="text-xs uppercase text-gray-400">
                  {stat_names[stat[0]]}
                </div>
                <div className="leading-none text-base text-white   ">
                  {stat[1]?.label ? stat[1].label : "none"}
                </div>
                <div className="leading-none text-base text-red-500 ">
                  {stat[1]?.rarity
                    ? `${(stat[1].rarity * 100) / 5000}%`
                    : "none"}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
