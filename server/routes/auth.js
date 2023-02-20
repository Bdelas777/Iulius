const router = require("express").Router();
const Usuario = require("../models/Usuario");
// Registro

router.post("/registro", async (req, res) => {
  const nuevoUsuario = new Usuario({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const usuario = await nuevoUsuario.save();
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
