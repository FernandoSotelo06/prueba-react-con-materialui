import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

export default function Hero() {
  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold">
            Alimenta
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Recetas fáciles, nutritivas y hechas por ti
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Publica tus platos, calcula sus nutrientes y mejora tu alimentación
            cada día.
          </Typography>
          <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            <Button variant="contained">Crea tu primera receta</Button>
            <Button variant="outlined">Explorar recetas</Button>
          </Box>
          <Typography sx={{ mt: 1 }}>
            Publica tus platos, calcula sus nutrientes y mejora tu alimentación
            cada día.
          </Typography>
        </Grid>

        {/* Imagen */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: 300,
              bgcolor: "#e0e0e0",
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
