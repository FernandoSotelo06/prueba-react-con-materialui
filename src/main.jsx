import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

// ⬇️ Swiper CSS primero
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ⬇️ Tu CSS después (override)
import "./index.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<ThemeProvider theme={theme}>
  <CssBaseline/> {/* Resetea estilos y aplica fondo */}
  <App />
</ThemeProvider>
);
