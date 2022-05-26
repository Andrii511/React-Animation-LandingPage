import { artistFormInputs } from "../components/DAOForms/fields/artistFormFields";

export const authorFormInputs = [
  {
    name: "name",
    label: "Your name",
  },
  {
    name: "email",
    label: "Your Email",
  },
  {
    name: "sharePersonal",
    label: "Are you comfortable sharing your identity with our community?",
  },
  {
    name: "instagram",
    label: "instagram handle",
  },
  {
    name: "discord",
    label: "discord handle",
  },
  {
    name: "twitter",

    label: "twitter handle",
  },
  {
    name: "other",
    label:
      "ANY OTHER PLATFORM YOU HAVE A PORTFOLIO ON? WRITE IT IN THIS FORMAT BELOW (BEHANCE: @USERNAME)",
    inputs: [
      {
        id: "otherPlatform",
        name: "otherPlatform",
        type: "text",
        placeholder: "",
        withIcon: true,
        required: false,
      },
      {
        id: "otherUsername",
        name: "otherUsername",
        type: "text",
        placeholder: "",
        required: false,
      },
    ],
  },
  {
    name: "everWorked",
    label: "HAVE YOU EVER WORKED ON A COMIC BOOK BEFORE?",
  },
  {
    name: "prevWork",
    label: "Share link on your previous work",
  },
  {
    name: "whichMore",
    label: "WHICH OF OUR OFFERINGS ARE YOU MOST INTERESTED IN?*",
  },
  {
    name: "whyDoYou",
    label: "Why do you want to work with us?",
  },
  {
    name: "haveIdea",
    type: "text",
    label:
      "DO YOU HAVE AN IDEA FOR A COMIC BOOK? IF YES, PLEA SE DESCRIBE THE IDEA",
  },
  {
    name: "areYouInterested",
    label:
      "ARE YOU INTERESTED IN USING OUR OTAKUS OR ANY OTHER CHARACTER WE OWN IN YOUR STORY?",
  },
  {
    name: "willTakePlace",
    label: "WILL YOUR STORY TAKE PLACE WITHIN THE OTAKUVERSE?",
  },
  {
    name: "whatNFTis",
    label: "DO YOU KNOW WHAT AN NFT IS?*",
  },
  {
    name: "introduce",

    label:
      "IF THERE IS ANYTHING ELSE YOU THINK MAY STRENGTHEN YOUR APPLICATION PLEASE RESPOND BELOW",
  },
];

export const formSubmissionFormater = (values) => {
  const prepared = [`Role: ${values.role}`];
  if (values.role === "author") {
    authorFormInputs.forEach((input) => {
      if (input.name === "other") {
        prepared.push(
          `${input.label}: ${values.otherPlatform}/${values.otherUsername}`
        );
      } else {
        prepared.push(`${input.label}: ${values[input.name]}`);
      }
    });
    return prepared;
  }
  if (values.role === "artist") {
    artistFormInputs.forEach((input) => {
      if (input.name === "other") {
        prepared.push(
          `${input.label}: ${values.otherPlatform}/${values.otherUsername}`
        );
      } else {
        prepared.push(`${input.label}: ${values[input.name]}`);
      }
    });
    return prepared;
  }
  return "other";
};
