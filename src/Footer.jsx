import React from "react";
import { Box, Typography, Button, Grid, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 4, px: 4, mt: 8 }}>
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Alimenta</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Recetas que inspiran, comunidad que une.
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
          </Box>
        </Grid>
      </Grid>
      <Typography textAlign="center" sx={{ mt: 4 }}>
        © 2025 Alimenta. Todos los derechos reservados
      </Typography>
    </Box>
  );
}
