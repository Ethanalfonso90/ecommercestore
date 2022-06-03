import { createTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const mainOrange = `#efab45`;

export default createTheme({
  palette: {
    common: {
      mainOrange: mainOrange,
    },
    primary: {
      main: mainOrange,
    },
    secondary: {
      main: green[500],
    },
    warning: {
      main: "#ed6c02",
    },
    success: {
      main: "#2e7d32",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: `"Roboto", "Helvetica", "Arial", "sans-serif"`,
    fontSize: 14,
  },
});
