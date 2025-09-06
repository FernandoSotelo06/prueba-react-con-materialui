import React from "react";
import { Box, Typography, Button, Grid, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from '@mui/icons-material/X';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#C8E6C9", py: 4, px: 4, mt: 8 }}>
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Alimenta</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Recetas que inspiran,
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            comunidad que une.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Enlaces rapidos</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Inicio
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Recetas
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Ingredientes
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Nosotros
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Contáctanos
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Iniciar Sesión
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Registrarse
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography fontWeight="bold">Suscríbete</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            No te pierdas ninguna receta
          </Typography>
          <Button variant="outlined" sx={{ mt: 1 }}>
            Suscribirme
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography fontWeight="bold">Síguenos</Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <YouTubeIcon />
            </IconButton>
            <IconButton>
              <XIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Typography textAlign="center" sx={{ mt: 4 }}>
        © 2025 Alimenta. Todos los derechos reservados
      </Typography>
    </Box>
  );
}
