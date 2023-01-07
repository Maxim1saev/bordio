import { createGlobalStyle } from "styled-components";
import "./public/fonts/index.css";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  font-family: Roboto, sans-serif !important;

  &::-webkit-scrollbar {
        display: none;
    }

     scrollbar-width: none;
}

button {
  color: #000000;
  border: none;
  background: none;
  letter-spacing: -0.02em;
  cursor: pointer;

  &:active {
    box-shadow: none;
  }

  &:disabled {
    box-shadow: none;
  };

}



input {
  border: none;
  
  &:focus {
    outline: none;
  }
}

ul {
  list-style: none;
}

img, svg {
  user-select: none;
}

html {
    height: 100%;
    width: 100%;
}

body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: auto;

    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
}
`;

export default GlobalStyles;
