import Express from "express";
import bodyParser from "body-parser";

const app = Express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send({ mensagem:"Bem vindo ao PokeTrunfo"});
});


export default app;