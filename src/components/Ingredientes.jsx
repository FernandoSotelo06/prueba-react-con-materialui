import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import paltaImg from "../assets/ingredientes/palta.jpg";
import espinacaImg from "../assets/ingredientes/espinaca.jpg";
import quinuaImg from "../assets/ingredientes/quinua.jpg";
import avenaImg from "../assets/ingredientes/avena.jpg";
import polloImg from "../assets/ingredientes/pollo.jpg";
import chiaImg from "../assets/ingredientes/chia.jpg";
const ingredientes = [
    {
        name: "Quinua",
        desc: "Proteína completa y versátil. Ideal para ensaladas y guisos.",
        image: quinuaImg,
    },
    {
        name: "Palta",
        desc: "Fuente de grasas saludables que aportan energía y cremosidad.",
        image: paltaImg,
    },
    {
        name: "Espinaca",
        desc: "Rica en hierro, fibra y antioxidantes que fortalecen la salud.",
        image: espinacaImg,
    },
    {
        name: "Chía",
        desc: "Semillas pequeñas llenas de fibra y omega 3 para tu bienestar.",
        image: chiaImg,
    },
    {
        name: "Pollo",
        desc: "Proteína magra, baja en grasa, perfecta para recetas balanceadas.",
        image: polloImg,
    },
    {
        name: "Avena",
        desc: "Energía duradera y saciante para empezar el día con fuerza.",
        image: avenaImg,
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
                                width: "100%",
                                maxWidth: 345,
                                height: 380,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                    boxShadow: 3,
                                },
                            }}
                        >
                            {/* Imagen dinámica */}
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.name}
                                sx={{
                                    height: 150,
                                    width: "100%",
                                    objectFit: "cover",
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 12,
                                    flexShrink: 0,
                                }}
                            />

                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                    variant="h6"
                                    color="primary.main"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                    }}
                                >
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
                                        WebkitLineClamp: 3,
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
