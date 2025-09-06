import { Button, Box } from "@mui/material";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ComoFunciona from "./ComoFunciona";
import RecetasDestacadas from "./RecetasDestacadas";
import Footer from "./Footer";
import Unete from "./Unete";
import Ingredientes from "./Ingredientes";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './index.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: 10 }}>
        <Hero />
        <ComoFunciona />
        <RecetasDestacadas />
        <Ingredientes />
        <Unete />
        <Footer />
      </Box>

    </>
  )

}