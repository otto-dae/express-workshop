const bodyParser = require('body-parser');
const morgan = require("morgan")
const express = require('express');
const app = express();
const pokemon = require("./routes/pokemon");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/pokemon", pokemon);

app.get("/",(req, res, next) =>
{
    return res.status(200).send("Bienvenido aL pokedex");
});

app.listen(process.env.PORT || 3000, () =>
{
    console.log("Server is Running...");
});
