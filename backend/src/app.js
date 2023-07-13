import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

import routes from "./routes.js";
import db from "./database/db.js";

dotenv.config();
class App {
  constructor() {
    this.server = express();
    db();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
