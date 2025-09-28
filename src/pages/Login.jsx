import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function Login() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9fafb",
      }}
    >
      <Box
        sx={{
          width: 350,
          p: 4,
          bgcolor: "white",
          borderRadius: 3,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Iniciar Sesión
        </Typography>
        <TextField
          fullWidth
          label="Correo electrónico"
          type="email"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Entrar
        </Button>
      </Box>
    </Box>
  );
}
