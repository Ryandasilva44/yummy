import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e50825",
    },

    secondary: {
      main: "#d5d8dc",
    },
  },

  typography: {
    fontFamily: "Arial",
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans serif",
        },
      },
    },
  },
});

export default theme;
