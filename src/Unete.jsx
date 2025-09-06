import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

export default function Unete() {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        backgroundColor: "#f9fafb",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Texto lado izquierdo */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold">
            Únete y empieza a mejorar tu alimentación
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Alimenta es la comunidad donde puedes descubrir recetas nutritivas
            y compartir tus mejores ideas para inspirar a otros.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 3, px: 4, py: 1.5, fontWeight: "bold" }}
          >
            Regístrate ahora
          </Button>
        </Grid>

        {/* Imagen lado derecho */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: 300,
              bgcolor: "#e0e0e0",
              borderRadius: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
