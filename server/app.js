import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors'

import auhtRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import { FRONT_URL } from "./config.js";

const app = express();

app.use(cors({
    origin: FRONT_URL,
    credentials: true
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", auhtRoutes);
app.use("/api", tasksRoutes);

export default app;
