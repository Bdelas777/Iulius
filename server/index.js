// Importacion de paquetes
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

//Rutas de programas internos
const usuarioRuta = require("./routes/usuarios");
const authRuta = require("./routes/auth");
const postRuta = require("./routes/posts");

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
app.use(morgan("common"));

app.use("/api/usuarios", usuarioRuta);
app.use("/api/auth", authRuta);
app.use("/api/posts", postRuta);

// Aplicacion a la escucha
app.listen(8800, () => {
  console.log("El Backend esta jalando");
});
