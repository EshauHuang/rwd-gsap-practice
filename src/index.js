import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "#5e3aee",
    secondary: "#696969",
    light: "#bfb8b8",
  },
  fontSize: {
    h1: "3.5rem",
    h2: "3rem",
    h3: "2.5rem",
    h4: "2rem",
    h5: "1.5rem",
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
