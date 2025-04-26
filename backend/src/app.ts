import express, { Request, Response } from "express";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1", userRoutes);

export default app;
