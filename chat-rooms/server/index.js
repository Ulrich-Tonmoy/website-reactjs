import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.send("Server Online");
});
app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
