import express, { Application, NextFunction, Request, Response } from "express";
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
  
   /**
   *
   * ERROR HANDLER
   *
   */

  app.use("*", (req: Request, res: Response, next: NextFunction) => {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  });

  app.listen(port, () => console.log(`Server started at port:${port}`));
};

main().catch((err) => console.log(err));
