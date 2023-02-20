const router = require("express").Router();
const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");

// Registro
router.post("/registro", async (req, res) => {
  try {
    // Generacion de una nueva contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Creacion de Usuario
    const nuevoUsuario = new Usuario({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Guarda usuario y regresa respuesta
    const usuario = await nuevoUsuario.save();
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
  }
});

// Iniciar sesion

router.post("/iniciarsesion", async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ email: req.body.email });
    !usuario && res.status(404).json("usuario no encontrado");
    const validaPasword = await bcrypt.compare(
      req.body.password,
      usuario.password
    );
    !validaPasword && res.status(404).json("contraseña no encontrada");
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
