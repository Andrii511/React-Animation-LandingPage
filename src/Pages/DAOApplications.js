import React, { useState } from "react";
import AuthorForm from "../components/DAOForms/AuthorForm";
import ArtistForm from "../components/DAOForms/ArtistForm";
import "../styles/DAOApplications.scss";
import DAORolePicker from "../components/DAORolePicker";
import DAOFormHeader from "../components/DAOFormHeader";
import { Link } from "react-router-dom";
const DAOA = "DAOA";
export default function DAOApplications() {
  const [applicant, setApplicant] = useState("");
  const [showForm, setShowForm] = useState(false);
  const handlePickApplicantRole = (e) => {
    setApplicant(e.currentTarget.getAttribute("value"));
    setShowForm(true);
  };

  const forms = {
    artist: (
      <ArtistForm setApplicant={setApplicant} show={applicant === "artist"} />
    ),
    author: (
      <AuthorForm setApplicant={setApplicant} show={applicant === "author"} />
    ),
    submit: (
      <div className="h-20 w-40">
        <Link to="/" className="Button block">
          <p className="join">Otaku home</p>
          <div className="bg-red-700 w-4/5 up h-1/2"></div>
          <div className="bg-red-500 w-4/5 down h-1/2"></div>
        </Link>
      </div>
    ),
  };
  return (
    <div className="DAOA font-squada min-h-screen text-white bg-black h-full flex flex-col py-20">
      <div className="cont flex flex-col h-full flex-grow items-center  ">
        <DAOFormHeader applicant={applicant} />
        <DAORolePicker
          handlePickApplicantRole={handlePickApplicantRole}
          showForm={showForm}
        />
        {forms[applicant]}
      </div>
    </div>
  );
}
