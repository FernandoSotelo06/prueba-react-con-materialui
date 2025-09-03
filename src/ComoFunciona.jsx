import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CreateIcon from "@mui/icons-material/Create";
import ShareIcon from "@mui/icons-material/Share";

const steps = [
  {
    icon: <RestaurantIcon fontSize="large" />,
    title: "Elige tus insumos",
    desc: "Descubre alimentos saludables y selecciona lo que necesitas",
    button: "Ver ingredientes",
  },
  {
    icon: <CreateIcon fontSize="large" />,
    title: "Crea tu receta",
    desc: "Publica tu receta con información nutricional automática",
    button: "Empezar receta",
  },
  {
    icon: <ShareIcon fontSize="large" />,
    title: "Comparte tu preparación",
    desc: "Inspira a otros compartiendo tus mejores preparaciones",
    button: "Explorar recetas",
  },
];

export default function ComoFunciona() {
  return (
    <Box sx={{ py: 8, px: 4, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold">
        Cómo funciona
      </Typography>
      <Typography sx={{ mt: 1 }}>
        Sigue estos simples pasos y empieza a disfrutar de una alimentación más saludable
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        {steps.map((step, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box>
              {step.icon}
              <Typography variant="h6" sx={{ mt: 2 }}>
                {step.title}
              </Typography>
              <Typography sx={{ mt: 1 }}>{step.desc}</Typography>
              <Button variant="outlined" sx={{ mt: 2 }}>
                {step.button}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
