import React from "react";
import Input from "./Input";
import MultiInput from "./MultiInput";
import RadioButtons from "./RadioButtons";
import TextArea from "./TextArea";
export default function FormikControls(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "multi-input":
      return <MultiInput {...rest} />;
    default:
      return null;
  }
}
