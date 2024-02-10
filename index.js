const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const PetRoutes = require("./routes/PetRoutes");
const UserRoutes = require("./routes/UserRoutes");
const AdoptionRoutes = require("./routes/AdoptionRoutes");
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI;
const cors = require("cors");
app.use(cors());
app.use(express.json());

function logger(req, res, next) {
    console.log("Request received at: ", new Date());
    console.log("Request type: ", req.method);
    console.log("Request URL: ", req.originalUrl);
    console.log("Request body: ", req.body);
    console.log("\n");
    next();
}

app.use(logger);
app.use("/pets", PetRoutes);
app.use("/users", UserRoutes);
app.use("/adoption", AdoptionRoutes);

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.listen(PORT, (err) => {
    if (err) {
        console.log("Server not started");
    } else {
        console.log("Server started on PORT " + PORT);
    }
});
