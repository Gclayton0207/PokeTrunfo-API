import Express from "express";
import db from "./config/dbConnect.js";
import bodyParser from "body-parser";

const app = Express();

db.on("error", console.log.bind(console, "Erro de conexao"));
db.once("open", () => {
  console.log("banco conectado");
});

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send({ mensagem: "Bem vindo ao PokeTrunfo" });
});

export default app;