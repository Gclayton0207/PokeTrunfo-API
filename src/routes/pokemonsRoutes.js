import express from "express";
import PokemonController from "../controllers/pokemonsController.js"

const routes = express.Router();

routes.get('/', PokemonController.home);

  export default routes;