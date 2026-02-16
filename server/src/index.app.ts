import express, { json } from "express";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import router from "./routers/index.routers";
import cookieParser from "cookie-parser";
import { NotFoundError } from "./errors/NotFoundError.error";

const app = express();

app.use(cookieParser());
app.use(json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.all("*", (req, res) => {
  throw new NotFoundError("Route not found", "ROUTE_NOT_FOUND");
});

app.use(errorHandler);

export { app };
