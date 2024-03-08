const express = require('express');
const app = express();
const pokedex = require('./pokedex.json')

/* 
Verbos HTTP 
   
    GET
    POST
    PATCH
    PUT
    DELETE
*/

app.get("/",(req, res, next) =>
{
    const pokemon = pokedex.pokemon;
    res.send(pokemon);
});

app.get("/:name",(req, res, next) =>
{
    console.log(req.params.name);
    res.status(200);
    res.send("Hola " + req.params.name);
});

app.listen(process.env.PORT || 3000, () =>
{
    console.log("Server is Running...");
});
