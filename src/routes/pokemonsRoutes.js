import express from "express";
import PokemonController from "../controllers/pokemonsController.js";

const routes = express.Router();

routes.get("/", PokemonController.home);
routes.get("/pokemons", PokemonController.listarpokemons);
routes.get("/pokemon/:id", PokemonController.listarPokemonPorId);
routes.post("/pokemon", PokemonController.cadastrarPokemon);
routes.put("/pokemon/:id", PokemonController.atualizarPokemon);
routes.delete("/pokemon/:id", PokemonController.excluirPokemon);
routes.post("/pokemon/batalhaBST", PokemonController.batalhaMaiorBST);

export default routes;
