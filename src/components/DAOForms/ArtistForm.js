import React from "react";
import FormTemplate from "./FormTemplate";
import { artistFormInputs } from "./fields/artistFormFields";
import { artistValidationSchema } from "./validationSchemas";
export default function ArtistForm({ show, setApplicant }) {
  return (
    <FormTemplate
      conditionalField={"wasRole"}
      show={show}
      initialValues={{
        role: "artist",
        name: "",
        email: "",
        sharePersonal: "no",
        instagram: "",
        discord: "",
        twitter: "",
        otherPlatform: "",
        otherUsername: "",
        everWorked: "no",
        wasRole: "artist",
        everWorkedWith: "no",
        areYouWilling: "no",
        mostInterested: "translating",
        introduce: "",
      }}
      submitFunc={setApplicant}
      fields={artistFormInputs}
      validationSchema={artistValidationSchema}
    />
  );
}
