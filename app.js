const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json("Welcome to Tuner!");
});

const artistsController = require('./controllers/artistsController');
app.use('/artists', artistsController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;