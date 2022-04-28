import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { HomeRouter } from "./routes";

const main = async () => {
  const app: Application = express();
  dotenv.config();

  const port = process.env.PORT || 8080;

  /**
   *
   * EXPRESS MIDDLEWARES
   *
   */

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cors());

  /**
   *
   * EXPRESS ROUTES
   *
   */

  app.use("/api", HomeRouter);

  app.listen(port, () => console.log(`Server started at port:${port}`));
};

main().catch((err) => console.log(err));
