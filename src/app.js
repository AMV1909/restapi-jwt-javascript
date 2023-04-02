import express from "express";
import morgan from "morgan";

import { index, login, users } from "./routes/index.js";

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api", index);
app.use("/api", login);
app.use("/api", users);

export { app };
