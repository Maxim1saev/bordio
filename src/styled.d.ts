import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      white: string;

      black: string;

      gray: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;

      softCyan: string;

      blue1: string;
      blue2: string;
      blue3: string;

      red: string;

      green: string;

      lightPurple: string;
      lightPink: string;
      olive: string;
      peach: string;
    };
  }
}
