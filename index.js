import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import pirateRoutes from "./routes/pirates.js";
import userRoutes from "./routes/user.js";

const app = express();
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/", pirateRoutes);
app.use("/", userRoutes);

const CONNECTION_URL = "mongodb+srv://mua-wallace:mbiketurah2020@cluster0.biz420p.mongodb.net/test";
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL)
    .then(() =>
        app.listen(PORT, () => console.log(`Server is running on Port: http://localhost:${PORT}`))
    )
    .catch((err) => console.log(err.message));