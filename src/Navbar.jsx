import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Navbar(){
    return(
        <AppBar 
 position="fixed"
      color="inherit"
      elevation={0} 
      sx={{
        borderBottom: "1px solid #e0e0e0", 
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)", 
        backdropFilter: "blur(10px)", 
        backgroundColor: "rgba(255, 255, 255, 0.9)", 
        zIndex: 1300, 
      }}
        >
            <Toolbar sx={{justifyContent: "space-between"}}>
                {/*logo*/}
                <Typography variant="h6" fontWeight="bold" color="primary">
                    Alimenta
                </Typography>


                {/*Menu*/}
                <Box sx={{display: "flex", gap:"3"}}>
                    <button color="inherit">Inicio</button>
                    <button color="inherit">Recetas</button>
                    <button color="inherit">Ingredientes</button>
                    <button color="inherit">Nosotros</button>
                    <button color="inherit">Contactanos</button>
                </Box>

                {/*Botones de acción*/}
                <Box sx={{display:"flex", gap: 1}}>
                    <button variant="outlined">Iniciar Sesión</button>
                    <button variant="outlined">Registrarse</button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}