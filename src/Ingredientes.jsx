import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const ingredientes = [
    {
        name: "Quinua",
        desc: "Proteína completa y versátil. Ideal para ensaladas y guisos.",
    },
    {
        name: "Palta",
        desc: "Fuente de grasas saludables que aportan energía y cremosidad.",
    },
    {
        name: "Espinaca",
        desc: "Rica en hierro, fibra y antioxidantes que fortalecen la salud.",
    },
    {
        name: "Chía",
        desc: "Semillas pequeñas llenas de fibra y omega 3 para tu bienestar.",
    },
    {
        name: "Pollo",
        desc: "Proteína magra, baja en grasa, perfecta para recetas balanceadas.",
    },
    {
        name: "Avena",
        desc: "Energía duradera y saciante para empezar el día con fuerza.",
    },
];

export default function Ingredientes() {
    return (
        <Box sx={{ py: 8, px: 4, textAlign: "center" }}>
            <Typography variant="h4" fontWeight="bold">
                Ingredientes saludables
            </Typography>
            <Typography sx={{ mt: 1 }}>
                Explora nuestra base de ingredientes nutritivos y descubre todo lo que puedes crear con ellos
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
                {ingredientes.map((item, index) => (
                    <Grid item xs={6} md={4} lg={2} key={index}>
                        <Card
                            sx={{
                                textAlign: "center",
                                borderRadius: 3,
                                width: "100%",         // ocupa el ancho disponible
                                maxWidth: 345,         // tamaño fijo para todos los cards
                                height: 380,           // altura uniforme para todos
                                display: "flex",
                                flexDirection: "column", // organiza internamente en columna
                                justifyContent: "space-between", // distribuye contenido
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                    boxShadow: 3,
                                },
                            }}
                        >

                            {/* Imagen fija */}
                            <Box
                                sx={{
                                    height: 150,               // altura fija para todas las imágenes
                                    bgcolor: "primary.light",  // placeholder
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 12,
                                    flexShrink: 0,             // evita que se deforme
                                }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                    variant="h6"
                                    color="primary.main"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap", // evita desbordes
                                    }}>

                                    {item.name}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        mt: 1,
                                        color: "text.secondary",
                                        display: "-webkit-box",
                                        overflow: "hidden",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: 3, // máximo 3 líneas
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                                
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Button variant="contained" sx={{ mt: 4 }}>
                Ver todos los ingredientes
            </Button>
        </Box>
    );
}
