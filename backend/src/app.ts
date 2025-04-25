import express, { Request, Response } from "express";
import userRoutes from "./routes/user.routes.js";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use(express.json());

app.use("/api/v1", userRoutes);

export default app;
