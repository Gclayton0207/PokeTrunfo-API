import Express from "express";

const app = Express();

app.get("/", (req, res) => {
  res.status(200).send("Bem vindo ao PokeTrunfo");
});


export default app;