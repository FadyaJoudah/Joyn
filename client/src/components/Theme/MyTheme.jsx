import { createTheme, ThemeProvider } from "@material-ui/core/styles";

export const myTheme = createTheme({
  palette: {
    primary: {
      main: "#607d8b",
      secondary: "#ffc107",
    },
    typography: {
      fontFamily: "Lato",
      fontWeightThin: 100,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightBold: 700,
    },
  },
});
