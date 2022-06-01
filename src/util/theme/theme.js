import { createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export default createTheme({
  palette: {
    common: {
      test: "#007289",
    },
    primary: {
      main: purple[500],
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
