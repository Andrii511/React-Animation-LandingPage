import React from "react";
import "../../styles/PartPicker.scss";
const PP = "PartPicker";
const pickers = [
  { id: "body", icon: "/assets/builder/ui/body.svg", label: "body" },
  { id: "eyes", icon: "/assets/builder/ui/eyes.svg", label: "eyes" },
  {
    id: "clothes",
    icon: "/assets/builder/ui/clothing.svg",
    label: "clothes",
  },
  { id: "hair", icon: "/assets/builder/ui/hair.svg", label: "hair" },
  { id: "back", icon: "/assets/builder/ui/back.svg", label: "background" },
  { id: "weapon", icon: "/assets/builder/ui/weapon.svg", label: "weapon" },
  {
    id: "bodyAccessory",
    icon: "/assets/builder/ui/body-accs.svg",
    label: "Body Accessory",
  },
  {
    id: "faceAccessory",
    icon: "/assets/builder/ui/hair.svg",
    label: "Face Accessory",
  },
];
export default function PartPicker({ part, pickPart }) {
  return (
    <div className="PartPicker w-full flex flex-col">
      {pickers.map((p) => (
        <button
          onClick={pickPart}
          value={p.id}
          key={p.id}
          className={`${PP}__item ${p.id === part ? "picked" : ""}`}
        >
          <div className="w-10 xl:w-8 flex items-center justify-center mx-2 xl:ml-5 xl:mr-6">
            <img
              className="h-8 lg:h-auto"
              src={p.icon}
              alt={`Choose ${p.label}`}
            />
          </div>
          <p className="capitalize hidden xl:block ">{p.label}</p>
        </button>
      ))}
    </div>
  );
}
