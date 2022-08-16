import mongoose from "mongoose";
import "dotenv/config";

const dbUser = process.env.MONGO_USER;
const dbPassword = process.env.MONGO_PASSWORD;
const dbCluster = process.env.MONGO_CLUSTER;
const dbCollection = process.env.MONGO_COLLECTION;

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}/${dbCollection}`
);

let db = mongoose.connection;

export default db;
