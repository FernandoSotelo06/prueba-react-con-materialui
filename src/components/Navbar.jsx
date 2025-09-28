import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import logosmallImg from "../assets/logo/logo-small.jpg";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);

  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Recetas", path: "/recetas" },
    { label: "Ingredientes", path: "/ingredientes" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Contáctanos", path: "/contacto" },
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src={logosmallImg}
              alt="Logo Alimenta"
              style={{ height: 40, borderRadius: "50%" }}
            />
            <Typography variant="h6" fontWeight="bold" color="primary">
              Alimenta
            </Typography>
          </Box>

          {/* Menú desktop */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  color="primary"
                  sx={{
                    fontWeight: 500,
                    "&:hover": { backgroundColor: theme.palette.primary.light },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Botones de acción desktop */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/login"
              >
                Iniciar Sesión
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/register"
              >
                Registrarse
              </Button>
            </Box>
          )}

          {/* Menú hamburguesa móvil */}
          {isMobile && (
            <IconButton color="primary" onClick={() => setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer móvil */}
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

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.label}
              component={Link}
              to={item.path}
              onClick={() => setOpenDrawer(false)}
              sx={{
                borderRadius: 2,
                "&:hover": { backgroundColor: theme.palette.primary.light },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/login"
            fullWidth
          >
            Iniciar Sesión
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/register"
            fullWidth
          >
            Registrarse
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
