const express = require("express")
const pokemon = express.Router();
const db = require("../config/database")

pokemon.post("/",(req, res, next) =>
{
    return res.status(200).send(req.body.name); 
    
});
pokemon.get("/", async (req, res, next) =>
{
    const pkmn =  await db.query("SELECT * FROM pokemon")
    return res.status(200).json(pkmn);     
});
pokemon.get('/:id([0-9]{1,3})', async (req, res, next)  =>
{
    const id = req.params.id -1;
    if(id >= 0 && id <= 150 )
    {
        const pkmn =  await db.query("SELECT * FROM pokemon WHERE pok_id=" + id + ";")
        return res.status(200).json(pkmn);
        
    }
        return res.status(404).send("pokemon not found"); 
});
pokemon.get('/:name([A-Za-z]+)', async (req, res, next) =>
{
    const name = req.params.name;
    const pkmn = await db.query("SELECT * FROM pokemon WHERE pok_name=" + name + ";");
    if(pkmn.lenght > 0)
    {
        return res.status(200).json(pkmn);
    }
    return res.status(404).send("pokemon not found"); 
});

module.exports = pokemon;