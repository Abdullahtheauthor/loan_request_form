import { createContext } from "react";
export let FormInputContext = createContext({
  labelTitle: "",
  handleChange: null,
  inputValue: null,
});
