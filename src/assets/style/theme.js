import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#772ce8",
    },
  },
  typography: {
    fontFamily: ["Poppins Regular", "sans-serif"].join(","),
    fontWeightRegular: '800'
  },
  components: {
      MuiInputBase: {
          styleOverrides: {
              root: {
                  fontWeight: '400'
              }
          }
      }
  }
});

export default theme;
