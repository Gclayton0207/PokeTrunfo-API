import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
  id: { type: "string", required: true },
  name: { type: "string", required: true },
  attributes: {
    type: {
      hp: { type: Number, required: true },
      attack: { type: Number, required: true },
      defense: { type: Number, required: true },
      "special-attack": { type: Number, required: true },
      "special-defense": { type: Number, required: true },
      speed: { type: Number, required: true },
    },
  },
});

const pokemons = mongoose.model('pokemons', pokemonSchema);

export default pokemons;