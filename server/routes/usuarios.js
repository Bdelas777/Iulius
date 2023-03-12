const router = require("express").Router();
const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");

// Actualiza Usuario
router.put("/:id", async (req, res) => {
  if (req.body.usuarioId === req.params.id || req.body.esAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const usuario = await Usuario.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Tu cuenta sea actualizado");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("Solo puedes actualizar tu cuenta!");
  }
});

// Elimina Usuario
router.delete("/:id", async (req, res) => {
  if (req.body.usuarioId === req.params.id || req.body.isAdmin) {
    try {
      await Usuario.findByIdAndDelete(req.params.id);
      res.status(200).json("Su cuenta ha sido eliminada");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("Solo puede eliminar su cuenta!");
  }
});

// ver un usuario
router.get("/:id", async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    const { password, updatedAt, ...other } = usuario._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Seguir un usuario
router.put("/:id/follow", async (req, res) => {
  if (req.body.usuarioId !== req.params.id) {
    try {
      const usuario = await Usuario.findById(req.params.id);
      const currentUsuario = await Usuario.findById(req.body.usuarioId);
      if (!usuario.followers.includes(req.body.usuarioId)) {
        await usuario.updateOne({ $push: { followers: req.body.usuarioId } });
        await currentUsuario.updateOne({
          $push: { followings: req.params.id },
        });
        res.status(200).json("Has seguido un usuario");
      } else {
        res.status(403).json("Ya sigues al usuario");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("No te puedes seguir a ti mismo");
  }
});

//unfollow a usuario

router.put("/:id/unfollow", async (req, res) => {
  if (req.body.usuarioId !== req.params.id) {
    try {
      const usuario = await Usuario.findById(req.params.id);
      const currentUsuario = await Usuario.findById(req.body.usuarioId);
      if (usuario.followers.includes(req.body.usuarioId)) {
        await usuario.updateOne({ $pull: { followers: req.body.usuarioId } });
        await currentUsuario.updateOne({
          $pull: { followings: req.params.id },
        });
        res.status(200).json("Lo has dejado de seguir");
      } else {
        res.status(403).json("No sigues a este usuario");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("No puedes dejar de seguirte a ti mismo");
  }
});

module.exports = router;
