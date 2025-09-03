import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const recetas = [
  {
    title: "Ensalada de quinua y garbanzos",
    desc: "Una combinación fresca de quinua, garbanzos y vegetales",
    tags: ["#vegano", "#alto en proteína"],
  },
  {
    title: "Pollo grillado con vegetales",
    desc: "Pechuga de pollo acompañada de vegetales",
    tags: ["<450 kcal", "#alto en proteína"],
  },
  {
    title: "Smoothie energizante de espinaca y mango",
    desc: "Bebida cremosa y refrescante con espinaca y mango",
    tags: ["#energizante", "#vitamínico"],
  },
];

export default function RecetasDestacadas() {
  return (
    <Box sx={{ py: 8, px: 4, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold">
        Recetas destacadas
      </Typography>
      <Typography sx={{ mt: 1 }}>
        Descubre lo que más disfruta nuestra comunidad
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        {recetas.map((receta, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <Box sx={{ height: 150, bgcolor: "#e0e0e0" }} />
              <CardContent>
                <Typography variant="h6">{receta.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {receta.desc}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
                  {receta.tags.map((tag, i) => (
                    <Typography
                      key={i}
                      variant="caption"
                      sx={{ color: "primary.main" }}
                    >
                      {tag}
                    </Typography>
                  ))}
                </Box>
                <Button variant="outlined" sx={{ mt: 2 }}>
                  Ver receta
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button variant="contained" sx={{ mt: 4 }}>
        Ver todas las recetas
      </Button>
    </Box>
  );
}
