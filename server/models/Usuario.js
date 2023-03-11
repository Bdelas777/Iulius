const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    fotoPerfil: {
      type: String,
      default: "",
    },
    fotoCover: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    esAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    ciudad: {
      type: String,
      max: 50,
    },
    de: {
      type: String,
      max: 50,
    },
    relacion: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Usuario", UsuarioSchema);
