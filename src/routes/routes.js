//importação dos arquivos
//criação do express
const express = require("express");

//chamando os controllers
const balanceControllers = require("../controllers/balanceControllers");
const eventCotrollers = require("../controllers/eventControllers");
const resetControllers = require("../controllers/resetControllers");

//chamando as rotas
const router = express.Router();

//Criação das rotas para cada controller
router.get("/balance", balanceControllers.getBalance);
router.post("/event", eventCotrollers.handleEvent);
router.post("/reset", resetControllers.resetState);

//importando o módulo de rotas
module.exports = router;
