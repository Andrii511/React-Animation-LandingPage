import React from "react";
import FormTemplate from "./FormTemplate";
import { authorFormInputs } from "./fields/authorFormFields";
import { authorValidationSchema } from "./validationSchemas";
export default function AuthorForm({ show, setApplicant }) {
  return (
    <FormTemplate
      conditionalField="prevWork"
      show={show}
      initialValues={{
        role: "author",
        name: "",
        email: "",
        sharePersonal: "no",
        instagram: "",
        discord: "",
        twitter: "",
        otherPlatform: "",
        otherUsername: "",
        everWorked: "no",
        prevWork: "",
        whichMore: ["publishing"],
        whyDoYou: "",
        haveIdea: "",
        areYouInterested: "no",
        willTakePlace: "no",
        whatNFTis: "no",
        introduce: "",
      }}
      submitFunc={setApplicant}
      fields={authorFormInputs}
      validationSchema={authorValidationSchema}
    />
  );
}
