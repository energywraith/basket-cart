import { Input } from "./Input";
import { Number } from "./Number";
import { Radio } from "./Radio";

export const map = {
  text: {
    Component: Input,
    defaultValue: "",
  },
  number: {
    Component: Number,
    defaultValue: "",
  },
  radio: {
    Component: Radio,
    defaultValue: "",
  },
};
