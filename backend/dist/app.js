import express from "express";
import userRoutes from "./routes/user.routes.js";
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use(express.json());
app.use("/api/v1", userRoutes);
export default app;
