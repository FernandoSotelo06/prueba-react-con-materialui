import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import React from "react";

export default function Navbar() {
  return (
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
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" fontWeight="bold" color="primary">
          Alimenta
        </Typography>

        {/* Menú de navegación */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="primary" variant="text">Inicio</Button>
          <Button color="primary" variant="text">Recetas</Button>
          <Button color="primary" variant="text">Ingredientes</Button>
          <Button color="primary" variant="text">Nosotros</Button>
          <Button color="primary" variant="text">Contáctanos</Button>
        </Box>

        {/* Botones de acción */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="outlined" color="primary" sx={{ textTransform: "none" }}>
            Iniciar Sesión
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              boxShadow: "none",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Registrarse
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
