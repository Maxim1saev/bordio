import {createGlobalStyle} from "styled-components";
import "./public/fonts/index.css";

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
    font-family: 'Roboto-Regular', sans-serif;
    font-family: 'Roboto-Medium', sans-serif;
}
`;

export default GlobalStyles;
