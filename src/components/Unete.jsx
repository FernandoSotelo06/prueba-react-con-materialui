import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import uneteImg from "../assets/unete/unete.jpg";

export default function Unete() {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        backgroundColor: "#f9fafb", // Fondo suave
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        {/* Texto lado izquierdo */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ lineHeight: 1.3 }}
          >
            Únete y empieza a mejorar tu alimentación
          </Typography>

          <Typography sx={{ mt: 2, color: "text.secondary" }}>
            Alimenta es la comunidad donde puedes descubrir recetas nutritivas,
            <br />
            calcular sus nutrientes y compartir tus mejores ideas para inspirar
            a otros.  
            <br />
            <strong>¡Mejora tu alimentación cada día con nosotros!</strong>
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              borderRadius: 2,
            }}
          >
            Regístrate ahora
          </Button>
        </Grid>

        {/* Imagen lado derecho */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={uneteImg}
            alt="Únete a la comunidad Alimenta"
            sx={{
              width: "100%",
              maxHeight: 400,
              borderRadius: 3,
              objectFit: "cover", // Mantiene proporción y recorta si es necesario
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}