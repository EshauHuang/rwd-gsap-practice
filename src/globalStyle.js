import { createGlobalStyle } from "styled-components";
import { devices } from "./devices";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins';
  }
  html {
    font-size: 14px;
    @media ${devices.laptop} {
      font-size: 12px;
    }
    @media ${devices.tablet} {
      font-size: 10px;
    }
    @media ${devices.mobileM} {
      font-size: 9px;
    }
  }
  a {
    text-decoration: none;
  }
  p {
      margin: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  textarea:focus, input:focus{
    outline: none;
  }
  button {
    border: 0;
  }
`;

export default GlobalStyle;
