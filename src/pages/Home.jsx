import React from "react";
import Hero from "../components/Hero";
import ComoFunciona from "../components/ComoFunciona";
import RecetasDestacadas from "../components/RecetasDestacadas";
import Ingredientes from "../components/Ingredientes";
import Unete from "../components/Unete";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <>
      <Navbar/>

        <Hero />
        <ComoFunciona />
        <RecetasDestacadas />
        <Ingredientes />
        <Unete />
        <Footer />

    </>
  );

}
