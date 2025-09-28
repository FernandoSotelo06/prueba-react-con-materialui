import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import heroImg from "../assets/hero/hero.jpg";
export default function Hero() {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        maxWidth: "1200px", // centra el contenido en pantallas grandes
        mx: "auto",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Texto del Hero */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem" }, // responsive
            }}
          >
            Alimenta
          </Typography>

          <Typography
            variant="h4"
            sx={{
              mt: 2,
              fontSize: { xs: "1.2rem", md: "1.8rem" },
            }}
          >
            Recetas fáciles, nutritivas y hechas por ti
          </Typography>

          <Typography sx={{ mt: 1, color: "text.secondary" }}>
            Publica tus platos, calcula sus nutrientes
          </Typography>
          <Typography sx={{ mt: 1, color: "text.secondary" }}>
            y mejora tu alimentación cada día
          </Typography>

          {/* Botones */}
          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{
                px: 3,
                py: 1,
              }}
            >
              Crea tu primera receta
            </Button>
            <Button
              variant="outlined"
              color="success"
              sx={{
                px: 3,
                py: 1,
              }}
            >
              Explorar recetas
            </Button>
          </Box>

          <Typography sx={{ mt: 2, fontSize: "0.9rem", color: "text.secondary" }}>
            Gratis, rápido y accesible desde cualquier dispositivo
          </Typography>
        </Grid>

        {/* Imagen del Hero */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={heroImg}
            alt="Imagen del hero"
            sx={{
              width: "100%",                      // ocupa el ancho completo
              height: { xs: 250, md: 400, lg: 389 }, // altura responsive
              borderRadius: 2,
              objectFit: "cover",                 // recorta la imagen sin deformarla
              display: "block",
              mx: "auto",                          // centrada
              boxShadow: 3,                        // sombra ligera
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}