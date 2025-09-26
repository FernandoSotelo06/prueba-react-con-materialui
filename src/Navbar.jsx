import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // md ~ 900px

  // Estado para abrir/cerrar el Drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  // Opciones de menú
  const menuItems = [
    "Inicio",
    "Recetas",
    "Ingredientes",
    "Nosotros",
    "Contáctanos",
  ];

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          borderBottom: "1px solid #e0e0e0",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          zIndex: 1300,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography variant="h6" fontWeight="bold" color="primary">
            Alimenta
          </Typography>

          {/* Menú desktop */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  color="primary"
                  sx={{
                    fontWeight: 500,
                    "&:hover": { backgroundColor: theme.palette.primary.light },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}

          {/* Botones de acción desktop */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="outlined" color="primary">
                Iniciar Sesión
              </Button>
              <Button variant="contained" color="primary">
                Registrarse
              </Button>
            </Box>
          )}

          {/* Ícono hamburguesa en móvil */}
          {isMobile && (
            <IconButton color="primary" onClick={() => setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer (menú lateral móvil) */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            backgroundColor: "#FAFAFA",
            padding: 2,
          },
        }}
      >
        <Typography variant="h6" fontWeight="bold" color="primary" sx={{ mb: 2 }}>
          Alimenta
        </Typography>
        <Divider />

        {/* Opciones de menú */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item}
              onClick={() => setOpenDrawer(false)}
              sx={{ borderRadius: 2, "&:hover": { backgroundColor: theme.palette.primary.light } }}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Botones de acción en Drawer */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Button variant="outlined" color="primary" fullWidth>
            Iniciar Sesión
          </Button>
          <Button variant="contained" color="primary" fullWidth>
            Registrarse
          </Button>
        </Box>
      </Drawer>
    </>
  );
}