const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Esta es a ruta del usuario");
});

module.exports = router;

// app.get("/usuarios", (req, res) => {
//   res.send("Hola usuario");
// });