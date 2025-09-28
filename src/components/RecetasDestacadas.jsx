import React from "react";
import { Box, Typography, Card, CardContent, Button, createTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../index.css'
import ensaladaImg from "../assets/recetas/ensalada-quinua-garbanzos.jpg";
import polloImg from "../assets/recetas/pollo-ensalada.jpg";
import smothieImg from "../assets/recetas/smothie.jpg";
import sopalentejasImg from "../assets/recetas/sopa-lentejas.jpg";
import tacosImg from "../assets/recetas/tacos.jpg";

// Datos simulados de recetas
const recetas = [
  {
    title: "Ensalada de quinua y garbanzos",
    desc: "Una combinación fresca de quinua, garbanzos y vegetales seleccionados.",
    tags: ["#vegano", "#alto en proteína"],
    image: ensaladaImg,
  },
  {
    title: "Pollo grillado con vegetales",
    desc: "Pechuga de pollo a la plancha acompañada de vegetales seleccionados.",
    tags: ["<450 kcal", "#alto en proteína"],
    image: polloImg,
  },
  {
    title: "Smoothie energizante de espinaca y mango",
    desc: "Bebida cremosa y refrescante con espinaca, mango y semillas de chía.",
    tags: ["#energizante", "#vitamínico"],
    image: smothieImg,
  },
  {
    title: "Tacos de pescado",
    desc: "Tacos frescos y saludables con pescado, aguacate y vegetales.",
    tags: ["#omega3", "#sin gluten"],
    image: tacosImg,
  },
  {
    title: "Sopa de lentejas",
    desc: "Sopa nutritiva y deliciosa para los días fríos.",
    tags: ["#alta en proteína vegetal", "#vegano"],
    image: sopalentejasImg,
  },
];

export default function RecetasDestacadas() {
  return (
    <Box sx={{ py: 8, px: 4, textAlign: "center" }}>
      {/* Título */}
      <Typography variant="h4" fontWeight="bold">
        Recetas destacadas
      </Typography>
      <Typography sx={{ mt: 1 }}>
        Descubre lo que más disfruta nuestra comunidad
      </Typography>

      {/* Carrusel */}
      <Box sx={{ mt: 4 }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true, type: "bullets" }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{
            paddingBottom: "40px", 
            overflow: "hidden", 
          }}
        >
          {recetas.map((receta, index) => (
            <SwiperSlide style={{ overflow: "visible" }} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  mx: "auto",
                  borderRadius: 3,
                  height: 380,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease",
                  border: "1px solid",
                  borderColor: "primary.light",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 4,
                    borderColor: "primary.main",
                  },
                }}
              >
                {/* Imagen dinámica */}
                <Box
                  component="img"
                  src={receta.image}
                  alt={receta.title}
                  sx={{
                    height: 150,
                    width: "100%",
                    objectFit: "cover",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    flexShrink: 0,
                  }}
                />

                {/* Contenido */}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography variant="h6" noWrap>
                      {receta.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3, // Máximo 3 líneas
                      }}
                    >
                      {receta.desc}
                    </Typography>

                    {/* Tags */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        mt: 1,
                        flexWrap: "wrap",
                      }}
                    >
                      {receta.tags.map((tag, i) => (
                        <Typography
                          key={i}
                          variant="caption"
                          sx={{
                            color: "primary.dark",
                            bgcolor: "primary.light",
                            px: 1.2,
                            py: 0.3,
                            borderRadius: 2,
                            fontWeight: 500,
                          }}
                        >
                          {tag}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  {/* Botón siempre alineado abajo */}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2, textTransform: "none" }}
                  >
                    Ver receta
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Botón final */}
      <Button variant="contained" sx={{ mt: 4 }}>
        Ver todas las recetas
      </Button>
    </Box>
  );
}
