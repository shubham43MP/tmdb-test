import express from "express";
import cors from "cors"
import movieRoutes from "./routes/movieRoutes";
const dotenv = require('dotenv')
dotenv.config()

const app = express();

app.use(cors({
  origin: "*",
}));

app.use(express.json());

app.use("/movies", movieRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server running on port 5000");
});
