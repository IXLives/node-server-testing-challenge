const express = require("express");
const server = express();

const Pokemon = require('../pokemon/pokemonModel')

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get('/pokemon', (req, res) => {
  Pokemon.getAll()
    .then(pokemon => {
      res.status(200).json(pokemon)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

server.post('/pokemon', (req, res) => {
  Pokemon.insert(req.body)
    .then(pokemon => {
      res.status(200).json(pokemon)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

server.delete('/pokemon/:id', (req, res) => {
  Pokemon.remove(req.params.id)
    .then(pokemon => {
      res.status(200).json(pokemon)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = server;
