//importação dos arquivos
//criação do express
const express = require("express");

const balanceControllers = require("../controllers/balanceControllers");
const eventCotrollers = require("../controllers/eventControllers");
const resetControllers = require("../controllers/resetControllers");

const router = express.Router();

//Criação das rotas para cada controller
router.get("/balance", balanceControllers.getBalance);
router.post("/event", eventCotrollers.handleEvent);
router.post("/reset", resetControllers.resetState);

module.exports = router;
