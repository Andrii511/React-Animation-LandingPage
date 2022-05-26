import React from "react";
import { motion } from "framer-motion";
import "../styles/SectionTitle.scss";
export default function SectionTitle({ show = true, children }) {
  return <div className="SectionTitle">{children}</div>;
}
