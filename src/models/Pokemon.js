import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: [String], required: true },
    attributes: {
      type: {
        hp: { type: Number, required: true },
        attack: { type: Number, required: true },
        defense: { type: Number, required: true },
        spAttack: { type: Number, required: true },
        spDefense: { type: Number, required: true },
        speed: { type: Number, required: true },
        _id: false
      },
      required: true,
    },
  },
  { versionKey: false }
);

const pokemons = mongoose.model("pokemons", pokemonSchema);

export default pokemons;
