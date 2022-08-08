import pokemons from "../models/Pokemon.js";

class PokemonController{


    static home = (req, res) => {
        res.status(200).send({ mensagem: "Bem vindo ao PokeTrunfo" });
      }

}

export default PokemonController