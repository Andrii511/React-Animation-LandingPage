import React from "react";
import { Formik, Form } from "formik";
import FormikControls from "../DAOFormInputs/FormikControls";
import axios from "axios";

export default function FormTemplate({
  submitFunc,
  conditionalField = "",
  initialValues,
  fields,
  validationSchema,
}) {
  return (
    <div className="w-full max-w-screen-sm  overflow-hidden ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          // const formatted = formSubmissionFormater(values);
          setSubmitting(true);
          const data = {
            service_id: "service_upp6sjb",
            template_id: "template_vjjmfqb",
            user_id: "user_dVbG10SM2pe8himikmfiU",
            template_params: {
              ...values,
            },
          };

          await axios
            .post("https://api.emailjs.com/api/v1.0/email/send", data)
            .then((res) => console.log("sent successful"))
            .catch((err) => console.log(err.message));
          submitFunc("submit");
          resetForm();
          setSubmitting(true);
        }}
      >
        {({ values, errors, handleBlur, handleChange, handleSubmit }) => {
          const currentErrorsList = Object.entries(errors);

          return (
            <Form onSubmit={handleSubmit} className="grid gap-10">
              {fields.map((item) => (
                <FormikControls
                  key={item.id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[item.name]}
                  conditional={conditionalField}
                  visible={values.everWorked === "yes" ? true : false}
                  {...item}
                />
              ))}
              <div className="font-manrope flex items-center gap-10 text-sm">
                <div className="h-20 w-40">
                  <button type="submit" className="Button">
                    <p className="join">Submit</p>
                    <div className="bg-red-700 w-4/5 up h-1/2"></div>
                    <div className="bg-red-500 w-4/5 down h-1/2"></div>
                  </button>
                </div>
                <div className="flex flex-col">
                  {currentErrorsList.map((err) => (
                    <div key={err} className="text-red-500">
                      {err[1]}
                    </div>
                  ))}
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
