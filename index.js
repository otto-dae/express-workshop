const express = require('express');
const app = express();
const {pokemon} = require('./pokedex.json')

/*
    GET -Obtener recursos
    POST - Almacenar/crear Recursos
    PATCH - Modificar una parte de un recurso
    PUT - Modificar un recurso
    DELETE - Borrar un r ecurso
*/
app.get("/",(req, res, next) =>
{
    return res.status(200).send("Bienvenido aL pokedex");
});

app.get("/pokemon",(req, res, next) =>
{
    return res.status(200).send(pokemon); 
    
});

app.get('/pokemon/:id([0-9]{1,3})', (req, res, next)  =>
{
    const id = req.params.id -1;
    if(id >= 0 && id <= 150 )
    {
        return res.status(200).send(pokemon[req.params.id - 1]);
        
    }
        return res.status(404).send("Pokemon not found"); 
});

app.get('/pokemon/:name[A-Za-z]+)', (req, res, next) =>
{
    const name = req.params.name;;
    
    /*for (i = 0; i < pokemon.length; i++)
    {
        if(pokemon[i].name.toUpperCase() == name.toUpperCase())
        {
            return res.status(200).send(pokemon[i]);
        }
    }*/

    const pk = pokemon.filter((p) => 
    {
        if(p.name.toUpperCase() == name.toUpperCase())
        {
            return p;
        }
    });
    return res.status(200).send(pk);
});

app.listen(process.env.PORT || 3000, () =>
{
    console.log("Server is Running...");
});
