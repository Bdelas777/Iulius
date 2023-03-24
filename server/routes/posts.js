const router = require("express").Router();
const Post = require("../models/Post");
const Usuario = require("../models/Usuario");

// Nota: Post es como una publicacion en español pero me es mas sencillo programarlo como post debido a lo corto del nombre
// crea un post
router.post("/", async (req, res) => {
  const nuevoPost = new Post(req.body);
  try {
    const guardadoPost = await nuevoPost.save();
    res.status(200).json(guardadoPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Actualiza post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("La publicacion ha sido actualizada");
    } else {
      res.status(403).json("Solo puedes actualizar tu publicacion");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Elimina post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("La publicacion ha sido eliminada");
    } else {
      res.status(403).json("Solo puedes eliminada tu publicacion");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// like a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("La publicacion ha recibido un like");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("La publicacion ha recibido un disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get timeline posts
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await Usuario.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
