import pokemons from "../models/Pokemon.js";

class PokemonController {
  static home = (req, res) => {
    res.status(200).send({ mensagem: "Bem vindo ao PokeTrunfo" });
  };
  static listarpokemons = (req, res) => {
    pokemons.find((err, pokemons) => {
      pokemons.sort((a, b) => a._id - b._id);
      res.status(200).json(pokemons);
    });
  };
  static cadastrarPokemon = (req, res) => {
    let pokemon = new pokemons(req.body);

    pokemon.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ mensagem: `${err.message} - Falha ao cadastrar` });
      } else {
        res.status(201).send(pokemon.toJSON());
      }
    });
  };

  static listarPokemonPorId = (req, res) => {
    const id = req.params.id;

    pokemons.findById(id, (err, pokemons) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do pokemon não localizado.`})
      } else {
        res.status(200).send(pokemons);
      }
    })
  }
  static atualizarPokemon = (req, res) => {
    const id = req.params.id;

    pokemons.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Pokemon atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }
}

export default PokemonController;
