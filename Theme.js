import { createMuiTheme } from "@material-ui/core/styles";

export const pxToRem = (px) => `${px / 22.5}rem`;
export function pxToVw(px) {
  return px * (100 / document.documentElement.clientWidth);
}

export const pxToVh = (px) =>
  `${px / (document.documentElement.clientHeight * 0.01)}vh`;

export default createMuiTheme({
  palette: {
    primary: {
      main: "rgba(57, 73, 94, 1)",
      light: "rgb(93,175,240,0.5)",
      dark: "rgb(93,175,240,0.2)",
    },
  },
});
