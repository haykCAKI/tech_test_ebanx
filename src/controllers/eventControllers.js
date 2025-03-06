//exportando o módulo de accountService de services;
const accountService = require("../services/accountService");

//função para os eventos que vão ocorrer de acordo com o Test script
const handleEvent = (req, res) => {
  //extraindo os valores do corpo de requisição de body;
  const { type, origin, destination, amount } = req.body;

  //evento de deposit
  //Criação da conta com o balanço Inicial
  if (type === "deposit") {
    const account = accountService.deposit(destination, amount);

    //Retorna a Resposta 201 {"destination": {"id":"100", "balance":10}}
    return res.status(201).json({ destination: account });
  }

  //evento de withdraw
  if (type === "withdraw") {
    const account = accountService.withdraw(origin, amount);

    //Retorna 404 0 Caso não exista a conta
    if (!account) {
      return res.status(404).json(0);
    }

    //Retorna a resposta 201: {"origin": {"id":"100", "balance":15}}
    res.status(201).json({ origin: account });
  }

  //evento de transfer
  if (type === "transfer") {
    const account = accountService.transfer(origin, amount, destination);

    //Retorna 404 0 Caso não exista a conta
    if (!account) {
      return res.status(404).json(0);
    }

    //Retorna resposta 201: {"origin": {"id":"100", "balance":0}, "destination": {"id":"300", "balance":15}}
    res.status(201).json({
      origin: account.origin,
      destination: account.destination,
    });
  }
};

//Exportando os Módulos de handleEvent
module.exports = { handleEvent };
