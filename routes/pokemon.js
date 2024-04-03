const express = require("express")
const pokemon = express.Router();
const pk = require('../pokedex.json').pokemon;

pokemon.post("/",(req, res, next) =>
{
    return res.status(200).send(req.body.name); 
    
});
pokemon.get("/",(req, res, next) =>
{
    return res.status(200).send(pk); 
    
});
pokemon.get('/:id([0-9]{1,3})', (req, res, next)  =>
{
    const id = req.params.id -1;
    if(id >= 0 && id <= 150 )
    {
        return res.status(200).send(pk[req.params.id - 1]);
        
    }
        return res.status(404).send("pokemon not found"); 
});
pokemon.get('/:name([A-Za-z]+)', (req, res, next) =>
{
    const name = req.params.name;
    const pkmn = pk.filter((p) => 
    {
        if(p.name.toUpperCase() == name.toUpperCase())
        {
            return p;
        }
    });
    if(pkmn.length > 0)
    {
        return res.status(200).send(pkmn);
    }
    return res.status(404).send("pokemon not found")
});

module.exports = pokemon;