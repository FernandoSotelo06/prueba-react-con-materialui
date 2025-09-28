// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Verde Fresh
      dark: "#388E3C",
      light: "#C8E6C9",
      contrastText: "#f5f5f5", // ✅ texto en botones verdes será gris muy claro
    },
    secondary: {
      main: "#FF9800", // Naranja Energía
      dark: "#F57C00",
      light: "#FFE0B2",
    },
    background: {
      default: "#FAFAFA", // Fondo general
      paper: "#F1F8E9",   // Fondo de cards y secciones
    },
    text: {
      primary: "#212121",  // Texto principal
      secondary: "#757575", // Texto secundario
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 500, // Menos bold para mejor legibilidad
    },
  },
});

export default theme;
