import { lighten, darken } from "polished";

const degree = 0.1;

const primary = "#334257";
const secondary = "#eeeeee";
const success = "#2d854c";
const danger = "#da0037";
const warning = "#ffbb4c";
const colorless = "#444444";

const theme = {
  colors: {
    primary: {
      light: lighten(degree, primary),
      main: primary,
      dark: darken(degree, primary),
    },
    secondary: {
      light: lighten(degree, secondary),
      main: secondary,
      dark: darken(degree, secondary),
    },
    success: {
      light: lighten(degree, success),
      main: success,
      dark: darken(degree, success),
    },
    danger: {
      light: lighten(degree, danger),
      main: danger,
      dark: darken(degree, danger),
    },
    warning: {
      light: lighten(degree, warning),
      main: warning,
      dark: darken(degree, warning),
    },
    colorless: {
      light: lighten(1, colorless),
      main: colorless,
      dark: darken(1, colorless),
    },
  },
};

export default theme;
