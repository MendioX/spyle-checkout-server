require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");


// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});



// Iniciar el servidor

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});