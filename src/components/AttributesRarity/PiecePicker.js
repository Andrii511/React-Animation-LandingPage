import React, { useEffect, useRef } from "react";
import "../../styles/PiecePicker.scss";
const PP = "PiecePicker";
export default function PiecePicker({ currentPiece, pieces, pickPiece }) {
  const box = useRef();
  const piecesToArray = Object.entries(pieces);
  useEffect(() => {
    box.current.scrollTop = 0;
  }, [pieces]);
  return (
    <div ref={box} className="PiecePicker p-2.5">
      {piecesToArray.map(([key, val]) => (
        <button
          onClick={() =>
            pickPiece({
              value: {
                id: key,
                zIndex: val?.zIndex || 0,
                label: val?.label || 0,
                rarity: val?.rarity,
              },
              subValue: val?.position ? val.position : null,
            })
          }
          key={key}
          value={key}
          className={`${PP}__item capitalize ${
            currentPiece === key ? "picked" : ""
          }`}
        >
          {val?.label} <span>{(val?.rarity * 100) / 5000}%</span>
        </button>
      ))}
    </div>
  );
}
