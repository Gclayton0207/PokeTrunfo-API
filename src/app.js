import Express from "express";
import db from "./config/dbConnect.js";
import bodyParser from "body-parser";
import routes from "./routes/pokemonsRoutes.js";
import cors from "cors";

const app = Express();

db.on("error", console.log.bind(console, "Erro de conexao"));
db.once("open", () => {
  console.log("banco conectado");
});

app.use(cors());
app.use(bodyParser.json());
app.use("/", routes);

export default app;
