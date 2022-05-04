import "reflect-metadata"
import express, { NextFunction, Request, Response } from "express";

import { AppError } from "./errors/AppError";
import createConnection from "./database"
import { router } from "./router";

createConnection();
const app = express();

app.use(express.json());

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error = ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server listen 3333"));