// Importacion de paquetes
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

//Rutas de programas internos
const usuarioRuta = require("./routes/usuarios");

// Rutas para configurar programas externos
dotenv.config();

// Conexiones
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Se ha conectado a  MongoDB");
  }
);

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("Comun"));

app.use("/api/usuarios", usuarioRuta);

// Aplicacion a la escucha
app.listen(8800, () => {
  console.log("El Backend esta jalando");
});
