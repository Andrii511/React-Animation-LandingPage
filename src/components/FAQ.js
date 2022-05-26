import React from "react";
import FAQItem from "./FAQItem";
import SectionTitle from "./SectionTitle";
import "../styles/FAQ.scss";
const qstns = [
  {
    qst: "What is Otaku Origins?",
    answr: `Otaku Origins is a generative NFT project that asks,
    what would happen if modern-day anime fans were to magically
    receive similar features, powers, and hella fresh gear as anime’s
    most popular protagonists and antagonists? Please visit our discord
    channel for more information.`,
  },
  {
    qst: "When was mint date?",
    answr: `Our public mint date was scheduled for Feburary 16th and sold out over the course of 48hrs.`,
  },
  {
    qst: "Where can I learn more about your project?",
    answr: `The litepaper is a great place to start, though our discord has all information in one place.`,
  },
  {
    qst: "How many traits do the Otakus have?",
    answr: `Each Otaku is created from over 200 unique traits that span across 8 different
    categories. Each Otaku will receive a random combination of these traits to ensure that no two are alike.`,
  },
  {
    qst: "Which marketplaces are you listed on?",
    answr: `We are listed on Magic Eden, Solanart, and Solsea.`,
  },
  {
    qst: "I don’t know anything about NFTs… can I still participate?",
    answr: `Absolutely! We don’t want to turn down any passionate Otakus. To learn a bit more about
    how to get started in NFTs, join our discord and head over to the #education channel`,
  },
];
export default function FAQ() {
  return (
    <section id="faqs" className="FAQ relative pb-10 bg-black ">
      <div className="cont">
        <SectionTitle>FAQ</SectionTitle>

        <div className="pt-10 grid gap-2.5">
          {qstns.map((q, i) => (
            <div key={i}>
              <FAQItem key={i} {...q} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
